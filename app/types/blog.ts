export interface BlogMetadata {
  title: string
  publishedAt: string
  summary: string
  image?: string
  category?: string
}

export interface BlogPost {
  metadata: BlogMetadata
  slug: string
  content: string
}

export interface BlogFrontmatter {
  metadata: Partial<BlogMetadata>
  content: string
}
