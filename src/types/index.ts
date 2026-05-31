export type ImpactLevel = 'h' | 'm' | 'l'

export type NewsCategory = 'genai' | 'gov' | 'arch' | 'biz' | 'tool'

export interface NewsStory {
  id: string
  time: string
  date: string
  category: NewsCategory
  tag: string
  headline: string
  headline_bold?: string
  source: string
  source_url: string
  impact: ImpactLevel
  summary: string
}

export interface NewsFeed {
  last_updated: string
  agent_push: string
  stories: NewsStory[]
}

export interface Service {
  id: string
  icon: string
  title: string
  body: string
  tags: string[]
  duration: string
  deliverable: string
}

export interface Insight {
  id: string
  tag: string
  title: string
  body: string
  read_time: string
  category: string
  featured: boolean
  slug: string
}
