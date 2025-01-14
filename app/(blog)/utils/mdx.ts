'use server'

import fs from 'fs'
import path from 'path'

import { BlogMetadata } from '@/types/blog'

const parseFrontmatter = async (fileContent: string) => {
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

const getMDXFiles = async (dir: string) => {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

const readMDXFile = async (filePath: string) => {
  const rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

const getMDXData = async (dir: string) => {
  const mdxFiles = await getMDXFiles(dir)
  return Promise.all(
    mdxFiles.map(async (file) => {
      const { metadata, content } = await readMDXFile(path.join(dir, file))
      const slug = path.basename(file, path.extname(file))

      return {
        metadata,
        slug,
        content,
      }
    })
  )
}

export async function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'app', '(blog)', 'posts'))
}
