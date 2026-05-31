"""
TheDatapedia Daily News Agent
Runs on a cron schedule (e.g. 6am UTC daily via GitHub Actions or Cloud Scheduler)
Scrapes top Data & AI news → classifies → summarizes via Claude → pushes JSON to GitHub
"""

import os
import json
import uuid
import base64
import datetime
import requests

# ── CONFIG ────────────────────────────────────────────────────────────────────
GITHUB_TOKEN = os.environ["GITHUB_TOKEN"]
GITHUB_REPO = os.environ.get("GITHUB_REPO", "YOUR_ORG/thedatapedia")
ANTHROPIC_API_KEY = os.environ["ANTHROPIC_API_KEY"]
NEWS_FILE_PATH = "public/data/news-feed.json"

# RSS/API sources — add more as needed
SOURCES = [
    "https://feeds.feedburner.com/oreilly/radar",
    "https://towardsdatascience.com/feed",
    "https://www.databricks.com/feed",
    "https://medium.com/feed/tag/data-engineering",
    "https://feeds.feedburner.com/TheSequenceScope",
]

CATEGORY_KEYWORDS = {
    "genai": ["llm", "gpt", "claude", "gemini", "anthropic", "openai", "langchain", "rag", "generative ai", "large language", "foundation model", "ai agent", "copilot"],
    "gov": ["governance", "data quality", "lineage", "catalog", "compliance", "gdpr", "ai act", "data contract", "metadata", "data mesh ownership"],
    "arch": ["lakehouse", "iceberg", "databricks", "snowflake", "bigquery", "data platform", "architecture", "pipeline", "dbt", "spark", "kafka", "flink", "feature store"],
    "biz": ["roi", "cdo", "enterprise", "gartner", "forrester", "mckinsey", "investment", "strategy", "cto", "survey", "report", "study"],
    "tool": ["tool", "release", "launch", "version", "open source", "sdk", "api", "library", "framework", "dbt", "airflow", "great expectations", "airbyte"],
}

IMPACT_KEYWORDS = {
    "h": ["gartner", "mckinsey", "eu ai act", "major release", "generally available", "ga", "enterprise", "billion", "regulation", "enforcement"],
    "m": ["preview", "beta", "new feature", "update", "acquisition", "partnership", "survey", "report"],
}


# ── STEP 1: FETCH RAW STORIES ─────────────────────────────────────────────────
def fetch_rss_stories(limit_per_source: int = 5) -> list[dict]:
    import xml.etree.ElementTree as ET
    stories = []
    for url in SOURCES:
        try:
            r = requests.get(url, timeout=10, headers={"User-Agent": "TheDatapedia-Agent/1.0"})
            root = ET.fromstring(r.content)
            ns = {"atom": "http://www.w3.org/2005/Atom"}
            items = root.findall(".//item") or root.findall(".//atom:entry", ns)
            for item in items[:limit_per_source]:
                title = (item.findtext("title") or item.findtext("atom:title", namespaces=ns) or "").strip()
                link = (item.findtext("link") or item.findtext("atom:link", namespaces=ns) or "").strip()
                source_name = url.split("/")[2].replace("www.", "").replace("feeds.feedburner.com/", "")
                if title:
                    stories.append({"raw_headline": title, "source_url": link, "source": source_name})
        except Exception as e:
            print(f"[WARN] Failed to fetch {url}: {e}")
    return stories


# ── STEP 2: CLASSIFY + SUMMARIZE VIA CLAUDE ──────────────────────────────────
def classify_and_summarize(stories: list[dict]) -> list[dict]:
    headlines_text = "\n".join(
        f"{i+1}. {s['raw_headline']}" for i, s in enumerate(stories)
    )

    prompt = f"""You are a senior Data & AI analyst for TheDatapedia, a consulting firm specializing in AI-Ready Data strategy.

Analyze these {len(stories)} news headlines and return a JSON array. For each story output:
- "index": the number (1-based)
- "include": true/false — only include if genuinely relevant to enterprise Data & AI practitioners (skip vendor fluff, pure startup funding, unrelated tech)
- "headline": cleaned, punchy version of the headline (max 120 chars). Bold the most important phrase using format: **bold phrase** rest of headline
- "category": one of [genai, gov, arch, biz, tool]
- "tag": human label for category [GenAI, Governance, Architecture, Business Impact, Tooling]
- "impact": h/m/l (h=high enterprise impact, m=medium, l=low/informational)
- "summary": 2 sentences max. What this means for enterprise data teams. Be specific, not generic.

Headlines:
{headlines_text}

Return ONLY a valid JSON array. No preamble, no markdown fences."""

    response = requests.post(
        "https://api.anthropic.com/v1/messages",
        headers={
            "x-api-key": ANTHROPIC_API_KEY,
            "anthropic-version": "2023-06-01",
            "content-type": "application/json",
        },
        json={
            "model": "claude-sonnet-4-20250514",
            "max_tokens": 4096,
            "messages": [{"role": "user", "content": prompt}],
        },
        timeout=60,
    )
    response.raise_for_status()
    raw = response.json()["content"][0]["text"].strip()

    classifications = json.loads(raw)

    now_utc = datetime.datetime.utcnow()
    today = now_utc.date().isoformat()
    results = []

    for c in classifications:
        if not c.get("include"):
            continue
        idx = c["index"] - 1
        if idx >= len(stories):
            continue
        source = stories[idx]

        # Parse bold phrase from headline
        raw_hl = c.get("headline", source["raw_headline"])
        headline_bold = ""
        headline_clean = raw_hl
        if "**" in raw_hl:
            import re
            match = re.search(r"\*\*(.+?)\*\*", raw_hl)
            if match:
                headline_bold = match.group(1)
                headline_clean = re.sub(r"\*\*(.+?)\*\*", r"\1", raw_hl)

        results.append({
            "id": str(uuid.uuid4())[:8],
            "time": now_utc.strftime("%H:%M"),
            "date": today,
            "category": c.get("category", "biz"),
            "tag": c.get("tag", "Business Impact"),
            "headline": headline_clean,
            "headline_bold": headline_bold,
            "source": source["source"],
            "source_url": source["source_url"],
            "impact": c.get("impact", "m"),
            "summary": c.get("summary", ""),
        })

    return results[:20]  # Cap at 20 stories per day


# ── STEP 3: PUSH TO GITHUB ────────────────────────────────────────────────────
def push_to_github(stories: list[dict]) -> None:
    now_utc = datetime.datetime.utcnow()
    payload = {
        "last_updated": now_utc.isoformat() + "Z",
        "agent_push": now_utc.isoformat() + "Z",
        "stories": stories,
    }

    api_url = f"https://api.github.com/repos/{GITHUB_REPO}/contents/{NEWS_FILE_PATH}"
    headers = {
        "Authorization": f"Bearer {GITHUB_TOKEN}",
        "Accept": "application/vnd.github.v3+json",
    }

    # Get current file SHA (required for update)
    get_res = requests.get(api_url, headers=headers)
    sha = get_res.json().get("sha") if get_res.status_code == 200 else None

    content_b64 = base64.b64encode(json.dumps(payload, indent=2, ensure_ascii=False).encode()).decode()
    commit_body = {
        "message": f"chore: news feed {now_utc.strftime('%Y-%m-%d %H:%M')} UTC",
        "content": content_b64,
    }
    if sha:
        commit_body["sha"] = sha

    put_res = requests.put(api_url, headers=headers, json=commit_body)
    put_res.raise_for_status()
    print(f"[OK] Pushed {len(stories)} stories to GitHub at {now_utc.isoformat()}")


# ── MAIN ──────────────────────────────────────────────────────────────────────
def run():
    print("[1/3] Fetching raw stories from RSS sources...")
    raw = fetch_rss_stories(limit_per_source=8)
    print(f"      {len(raw)} raw stories fetched")

    print("[2/3] Classifying and summarizing via Claude...")
    stories = classify_and_summarize(raw)
    print(f"      {len(stories)} stories passed quality filter")

    print("[3/3] Pushing to GitHub...")
    push_to_github(stories)
    print("[DONE] thedatapedia.com will refresh within 1 hour via Vercel ISR")


if __name__ == "__main__":
    run()
