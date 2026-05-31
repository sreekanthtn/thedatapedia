# TheDatapedia — Deployment Runbook
# thedatapedia.com on Vercel + GoDaddy DNS
# Estimated total time: 45 minutes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 1 — PUSH PROJECT TO GITHUB
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1a. Create a new repo at github.com/new
    Name: thedatapedia
    Visibility: Private (recommended)
    Do NOT initialize with README

1b. From the project folder:

    git init
    git add .
    git commit -m "feat: initial project setup"
    git remote add origin https://github.com/YOUR_ORG/thedatapedia.git
    git push -u origin main

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 2 — DEPLOY TO VERCEL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2a. Go to vercel.com → "Add New Project"
    → Import from GitHub → select "thedatapedia"

2b. Framework Preset: Next.js (auto-detected)
    Root Directory: ./  (leave default)
    Build Command:  npm run build  (auto-detected)
    Output:         .next  (auto-detected)

2c. Environment Variables (add before first deploy):

    KEY                     VALUE
    ─────────────────────── ─────────────────────────────────────────────
    NEWS_FEED_URL           https://raw.githubusercontent.com/YOUR_ORG/thedatapedia/main/public/data/news-feed.json
    NEXT_PUBLIC_SITE_URL    https://thedatapedia.com

2d. Click Deploy → wait ~2 minutes
    You get a preview URL: thedatapedia.vercel.app — test it first.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 3 — CONNECT CUSTOM DOMAIN IN VERCEL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3a. Vercel Dashboard → your project → Settings → Domains
3b. Add domain: thedatapedia.com  → click Add
    Add domain: www.thedatapedia.com → click Add
3c. Vercel shows you the DNS records to set. Copy these:

    Type    Name    Value
    ─────── ─────── ───────────────────────────────
    A       @       76.76.21.21
    CNAME   www     cname.vercel-dns.com

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 4 — CONFIGURE GODADDY DNS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4a. Login to GoDaddy → My Products → thedatapedia.com → DNS
4b. Delete any existing A records for @ (parked page records)
4c. Add new records:

    RECORD 1:
    Type:  A
    Name:  @
    Value: 76.76.21.21
    TTL:   600 (10 minutes — you can bump to 3600 later)

    RECORD 2:
    Type:  CNAME
    Name:  www
    Value: cname.vercel-dns.com
    TTL:   600

4d. Save. DNS propagation: 5–30 minutes (usually under 10)
4e. Back in Vercel, click "Refresh" next to your domain.
    Status changes from "Invalid" → "Valid" once DNS propagates.

4f. Vercel auto-provisions SSL certificate (Let's Encrypt).
    thedatapedia.com is live with HTTPS in ~15 min total.

Verify: curl -I https://thedatapedia.com
Should return: HTTP/2 200

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 5 — WIRE UP THE NEWS AGENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5a. Add secret to GitHub repo:
    Settings → Secrets and Variables → Actions → New repository secret
    Name:  ANTHROPIC_API_KEY
    Value: sk-ant-...your key...

5b. The workflow uses GITHUB_TOKEN automatically (no setup needed)

5c. Test manually:
    Actions tab → "Daily News Feed Agent" → Run workflow
    Watch the logs — should see "[OK] Pushed N stories to GitHub"

5d. Verify: check public/data/news-feed.json was updated in main branch
    Within 1 hour, thedatapedia.com/news shows fresh stories (ISR)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 6 — OPTIONAL: FORCE IMMEDIATE REFRESH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

If you want the site to update instantly (not wait up to 1hr ISR):
Add a Vercel Deploy Hook:

6a. Vercel → Settings → Git → Deploy Hooks
    Name: "News Agent Trigger"
    Branch: main
    Copy the generated URL

6b. In GitHub repo:
    Settings → Secrets and Variables → Actions → Variables → New
    Name:  VERCEL_DEPLOY_HOOK
    Value: https://api.vercel.com/v1/integrations/deploy/...

    The GitHub Actions workflow already calls this hook if set.
    Agent runs → commits JSON → triggers Vercel build → site updates in ~90s.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ARCHITECTURE SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

GitHub Actions (6am UTC)
  └── news_agent.py
        ├── Fetch RSS (8 sources × 8 stories = 64 raw)
        ├── Claude classifies + summarizes → 15-20 stories
        └── Commits public/data/news-feed.json to main
              └── (optional) triggers Vercel Deploy Hook
                    └── Vercel rebuilds → thedatapedia.com live

ISR fallback (no deploy hook):
  User visits /news → Vercel checks revalidate=3600
  If stale → fetches fresh news-feed.json from GitHub raw URL
  Next visitor gets cached fresh page

Monthly cost estimate:
  Vercel Hobby:     $0/mo  (sufficient for launch)
  Vercel Pro:       $20/mo (if >100GB bandwidth or team needed)
  Anthropic API:    ~$0.50-2.00/mo (Claude Sonnet, 30 runs/month)
  GoDaddy domain:   already paid
  TOTAL:            $0–22/mo to run thedatapedia.com

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CHECKLIST BEFORE GO-LIVE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

□ Replace YOUR_ORG in GITHUB_REPO env var
□ Replace YOUR_ORG in NEWS_FEED_URL env var
□ Add real LinkedIn/contact links in Navbar and Footer
□ Add Google Analytics or Plausible snippet to layout.tsx
□ Set up email capture (Mailchimp / ConvertKit API) on assessment form
□ Test news agent manually before scheduling
□ Add robots.txt and sitemap.xml for SEO
□ Add OG image (1200×630) to /public for social sharing
