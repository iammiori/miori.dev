import { Code2, FlaskConical, Sprout } from 'lucide-react'

import ScrollRevealContainer from './ScrollRevealContainer'

import { Card } from '@/components/ui/card'

interface Props {
  icon: React.ReactNode
  content: string
}

function BlogContentItem({ icon, content }: Props) {
  return (
    <div className="flex items-center gap-4">
      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-600/40 shrink-0">
        {icon}
      </div>
      <p className="text-muted-foreground dark:text-slate-300">{content}</p>
    </div>
  )
}

export function AboutBlogSection() {
  return (
    <ScrollRevealContainer>
      <Card className="p-6 bg-background dark:bg-slate-600/20">
        <h2 className="text-xl font-semibold mb-6">여기서는..</h2>
        <div className="space-y-6">
          <BlogContentItem
            icon={<Code2 className="w-5 h-5" />}
            content="프론트엔드 개발 경험과 학습한 내용을 공유해요"
          />
          <BlogContentItem
            icon={<FlaskConical className="w-5 h-5" />}
            content="관심 있는 기술 / 새로운 기술을 탐구하며, 그 과정에서 얻은 인사이트를 기록해요"
          />
          <BlogContentItem
            icon={<Sprout className="w-5 h-5" />}
            content="가끔은 개발자로서의 성장 이야기도 써보려해요"
          />
        </div>
      </Card>
    </ScrollRevealContainer>
  )
}
