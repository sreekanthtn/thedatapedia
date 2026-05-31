'use client'

import { useState } from 'react'
import type { NewsFeed, NewsCategory } from '@/types'
import { filterByCategory, formatFeedDate, formatFeedTime } from '@/lib/news'
import clsx from 'clsx'

const FILTERS: { label: string; value: NewsCategory | 'all' }[] = [
  { label: 'All Topics', value: 'all' },
  { label: 'GenAI', value: 'genai' },
  { label: 'Governance', value: 'gov' },
  { label: 'Architecture', value: 'arch' },
  { label: 'Business Impact', value: 'biz' },
  { label: 'Tooling', value: 'tool' },
]

const TAG_STYLES: Record<string, string> = {
  genai: 'text-[#5555ff] bg-[#0d0d20] border-[#2020a0]',
  gov: 'text-[#22a06b] bg-[#0d1a14] border-[#1a4030]',
  arch: 'text-[#c8a84b] bg-[#1a110d] border-[#4a3010]',
  biz: 'text-[#e05555] bg-[#1a0d0d] border-[#4a1010]',
  tool: 'text-[#9055cc] bg-[#110d1a] border-[#3a1a5a]',
}

const IMPACT_WIDTH: Record<string, string> = { h: '85%', m: '50%', l: '22%' }
const IMPACT_LABEL: Record<string, string> = { h: 'High', m: 'Med', l: 'Low' }
const IMPACT_COLOR: Record<string, string> = { h: '#5555ff', m: '#c8a84b', l: '#2a2a4a' }

interface Props {
  feed: NewsFeed
}

export default function NewsFeedTerminal({ feed }: Props) {
  const [active, setActive] = useState<NewsCategory | 'all'>('all')
  const stories = filterByCategory(feed.stories, active)

  return (
    <div className="font-mono bg-[#0a0a0f] text-[#c8c8d8] rounded-lg overflow-hidden border border-[#1a1a2a]">
      {/* Top bar */}
      <div className="bg-[#111118] border-b border-[#1e1e2e] px-5 py-3 flex items-center justify-between">
        <span className="text-[11px] tracking-widest uppercase text-brand font-semibold">
          // DataPedia Intelligence Feed
        </span>
        <div className="flex items-center gap-2 text-[10px] text-[#3a3a5a] tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
          LIVE · {formatFeedTime(feed.last_updated)}
        </div>
      </div>

      {/* Filters */}
      <div className="bg-[#0d0d16] border-b border-[#1a1a2a] px-2 flex overflow-x-auto">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={clsx(
              'text-[10px] tracking-widest uppercase px-4 py-2.5 border-r border-[#1a1a2a] whitespace-nowrap transition-all duration-150 font-mono',
              active === f.value
                ? 'text-brand bg-[#0d0d20]'
                : 'text-[#3a3a5a] hover:text-[#9898b8] hover:bg-[#13131f]'
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Column headers */}
      <div className="grid grid-cols-[48px_72px_1fr_90px] gap-0 bg-[#0d0d16] border-b border-[#1e1e2e] px-5 py-1.5">
        {['#', 'Time', 'Headline', 'Signal'].map((h) => (
          <div key={h} className="text-[9px] tracking-widest uppercase text-[#2d2d4a] font-semibold">
            {h}
          </div>
        ))}
      </div>

      {/* Stories */}
      <div className="max-h-[480px] overflow-y-auto scrollbar-thin">
        {stories.map((story, i) => (
          <a
            key={story.id}
            href={story.source_url}
            target="_blank"
            rel="noopener noreferrer"
            className="grid grid-cols-[48px_72px_1fr_90px] gap-0 px-5 py-2.5 border-b border-[#111120] hover:bg-[#0e0e1a] transition-colors duration-100 no-underline group"
          >
            <div className="text-[10px] text-[#2a2a42] pt-0.5">{String(i + 1).padStart(2, '0')}</div>
            <div className="text-[10px] text-[#3a3a5a] pt-0.5 whitespace-nowrap">{story.time}</div>
            <div>
              <div className="text-[12px] text-[#b0b0c8] leading-snug font-sans group-hover:text-white transition-colors duration-100">
                {story.headline_bold ? (
                  <>
                    <span className="text-[#d4d4f0] font-medium">{story.headline_bold}</span>
                    {story.headline.replace(story.headline_bold, '')}
                  </>
                ) : (
                  story.headline
                )}
              </div>
              <div
                className={clsx(
                  'inline-block mt-1 text-[9px] tracking-wider uppercase px-1.5 py-0.5 border font-semibold',
                  TAG_STYLES[story.category]
                )}
              >
                {story.tag}
              </div>
            </div>
            <div className="pt-0.5">
              <div className="h-[3px] w-10 bg-[#1a1a2a] rounded-sm overflow-hidden">
                <div
                  className="h-full rounded-sm"
                  style={{ width: IMPACT_WIDTH[story.impact], background: IMPACT_COLOR[story.impact] }}
                />
              </div>
              <div className="text-[9px] text-[#2a2a42] mt-1">{IMPACT_LABEL[story.impact]}</div>
              <div className="text-[9px] text-[#1e1e36] mt-0.5">{story.source}</div>
            </div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className="bg-[#0d0d16] border-t border-[#1a1a2a] px-5 py-2.5 flex justify-between items-center">
        <div className="text-[9px] text-[#2a2a42] tracking-wider">
          {formatFeedDate(feed.last_updated)}
          <span className="mx-2 text-[#1e1e2e]">|</span>
          <span className="text-[#3a3a5a]">{feed.stories.length} stories</span>
          <span className="mx-2 text-[#1e1e2e]">|</span>
          agent push: {formatFeedTime(feed.agent_push)}
        </div>
        <a
          href="/news"
          className="text-[9px] text-brand tracking-wider hover:text-[#8888ff] transition-colors no-underline"
        >
          Full feed →
        </a>
      </div>
    </div>
  )
}
