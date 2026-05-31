import Navbar from '@/components/ui/Navbar'
import NewsFeedTerminal from '@/components/news/NewsFeedTerminal'
import { getNewsFeed, formatFeedDate } from '@/lib/news'
import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Data & AI News — TheDatapedia Intelligence Feed',
  description: 'Daily curated Data & AI news for enterprise practitioners. Signal over noise — GenAI, Data Architecture, Governance, and Tooling.',
}

export default async function NewsPage() {
  const feed = await getNewsFeed()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-paper">
        <div className="max-w-7xl mx-auto px-8 lg:px-20 py-16">
          <div className="mb-12">
            <div className="font-mono text-xs tracking-widest uppercase text-brand mb-3">
              Intelligence Feed · {formatFeedDate(feed.last_updated)}
            </div>
            <h1 className="font-serif text-5xl font-black tracking-tight leading-tight text-ink mb-4">
              Data & AI News
            </h1>
            <p className="text-lg text-ink-muted max-w-xl leading-relaxed">
              {feed.stories.length} stories curated today. Classified by category and impact signal
              for enterprise data practitioners.
            </p>
          </div>
          <NewsFeedTerminal feed={feed} />
        </div>
      </main>
    </>
  )
}
