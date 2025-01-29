/* eslint-disable @typescript-eslint/no-explicit-any */
'use clinet'

import { MDXRemote } from 'next-mdx-remote/rsc'
import { ComponentProps } from 'react'
import rehypePrettyCode from 'rehype-pretty-code'

import { Blockquote } from './Blockquote'
import { Code } from './Code'
import { CustomLink } from './CustomLink'
import { createHeading } from './Heading'
import { Pre } from './Pre'
import { RoundedImage } from './RoundedImage'
import { Table } from './Table'

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  pre: Pre,
  code: ({ children, ...props }: any) => {
    const isBlockCode = !!props['data-language']
    if (isBlockCode) {
      return <Code {...props}>{children}</Code>
    }

    return (
      <code
        {...props}
        className="inline-block rounded bg-gray-200 px-1 py-0.5 text-sm dark:bg-gray-700"
      >
        {children}
      </code>
    )
  },
  Table,
  blockquote: Blockquote,
}

type Props = ComponentProps<typeof MDXRemote>

export function CustomMDX(props: Props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={{
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [
            [
              rehypePrettyCode as any,
              {
                theme: 'one-dark-pro',
                keepBackground: false,
                defaultLang: {
                  block: 'plaintext',
                },
              },
            ],
          ],
        },
      }}
    />
  )
}
