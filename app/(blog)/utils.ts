import fs from 'fs'
import path from 'path'

import { BlogMetadata, BlogPost } from '@/types/blog'

const parseFrontmatter = (fileContent: string) => {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(fileContent)

  if (!match) {
    throw new Error('Invalid frontmatter format')
  }

  const frontMatterBlock = match[1]
  const content = fileContent.replace(frontmatterRegex, '').trim()
  const frontMatterLines = frontMatterBlock.trim().split('\n')
  const metadata: Record<string, string> = {}

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ')
    const value = valueArr
      .join(': ')
      .trim()
      .replace(/^['"](.*)['"]$/, '$1')
    metadata[key.trim()] = value
  })

  const requiredFields = ['title', 'publishedAt'] as const
  const missingFields = requiredFields.filter((field) => !metadata[field])

  if (missingFields.length > 0) {
    throw new Error(
      `Missing required frontmatter fields: ${missingFields.join(', ')}`
    )
  }

  const validatedMetadata: BlogMetadata = {
    title: metadata.title,
    publishedAt: metadata.publishedAt,
    summary: metadata.summary,
    ...(metadata.image && { image: metadata.image }),
  }

  return { metadata: validatedMetadata, content }
}
const getMDXFiles = (dir: string) => {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

const readMDXFile = (filePath: string) => {
  const rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

const getMDXData = (dir: string) => {
  const mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file))
    const slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'app', '(blog)', 'posts'))
}

export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  const targetDate = new Date(date)

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  const daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}

export function sortByDate(a: BlogPost, b: BlogPost) {
  if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
    return -1
  }
  return 1
}
