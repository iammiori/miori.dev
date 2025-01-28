import { MDXRemote } from 'next-mdx-remote/rsc'

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
  code: Code,
  Table,
  blockquote: Blockquote,
  pre: Pre,
}

export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={{
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
      }}
    />
  )
}
