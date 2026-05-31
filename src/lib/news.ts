import type { NewsFeed, NewsStory, NewsCategory } from '@/types'

const FEED_URL =
  process.env.NEWS_FEED_URL ||
  'https://raw.githubusercontent.com/YOUR_ORG/thedatapedia/main/public/data/news-feed.json'

export async function getNewsFeed(): Promise<NewsFeed> {
  try {
    const res = await fetch(FEED_URL, {
      next: { revalidate: 3600 }, // ISR: Vercel re-fetches every hour
    })
    if (!res.ok) throw new Error(`Feed fetch failed: ${res.status}`)
    return res.json()
  } catch (err) {
    console.error('News feed fetch error:', err)
    return FALLBACK_FEED
  }
}

export function filterByCategory(stories: NewsStory[], cat: NewsCategory | 'all'): NewsStory[] {
  if (cat === 'all') return stories
  return stories.filter((s) => s.category === cat)
}

export function formatFeedTime(isoString: string): string {
  const d = new Date(isoString)
  return d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' }) + ' UTC'
}

export function formatFeedDate(isoString: string): string {
  const d = new Date(isoString)
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC' }).toUpperCase()
}

// Fallback for local dev or fetch failures
const FALLBACK_FEED: NewsFeed = {
  last_updated: new Date().toISOString(),
  agent_push: new Date().toISOString(),
  stories: [
    {
      id: 'placeholder-1',
      time: '07:00',
      date: new Date().toISOString().split('T')[0],
      category: 'genai',
      tag: 'GenAI',
      headline: 'News feed will populate once agent is connected and pushing data',
      headline_bold: 'News feed will populate',
      source: 'TheDatapedia',
      source_url: 'https://thedatapedia.com',
      impact: 'h',
      summary: 'Agent is not yet connected. Set NEWS_FEED_URL env var in Vercel.',
    },
  ],
}
