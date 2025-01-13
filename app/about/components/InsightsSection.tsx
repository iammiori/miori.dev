import {
  BrainCircuit,
  Wrench,
  Sprout,
  Blocks,
  TestTube2,
  ShieldCheck,
} from 'lucide-react'

import ScrollRevealContainer from './ScrollRevealContainer'

import { Card } from '@/components/ui/card'

interface Props {
  icon: React.ReactNode
  title: string
  description: string
}

function InsightCard({ icon, title, description }: Props) {
  return (
    <Card className="p-6 bg-background dark:bg-slate-600/20 h-full flex flex-col">
      <div className="p-3 w-fit rounded-full bg-muted dark:bg-slate-600/40 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 dark:text-slate-200">
        {title}
      </h3>
      <p className="text-muted-foreground dark:text-slate-300 break-keep leading-relaxed mt-auto">
        {description}
      </p>
    </Card>
  )
}

export default function InsightsSection() {
  const insights = [
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: '문제 해결',
      description: '문제의 본질을 파악하고 가장 효율적인 해결 방법을 탐색해요',
    },
    {
      icon: <Blocks className="w-6 h-6" />,
      title: '견고한 기반',
      description: '기술의 원리를 깊이있게 이해하고 효과적으로 활용해요',
    },
    {
      icon: <Sprout className="w-6 h-6" />,
      title: '함께 성장',
      description: '문제를 바라보는 관점과 해결 과정을 공유하며 함께 성장해요',
    },
    {
      icon: <TestTube2 className="w-6 h-6" />,
      title: '실험과 도전',
      description: '새로운 기술과 방법을 경험하고 더 나은 방식을 찾아요',
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: '최적화',
      description: '제한된 리소스 안에서 최적의 해결책을 찾아 생산성을 높여요',
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: '꼼꼼한 검증',
      description:
        '테스트 코드를 통해 안정적이고, 신뢰할 수 있는 코드를 만들어요',
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {insights.map((insight, index) => (
        <ScrollRevealContainer key={insight.title} delay={index * 0.2}>
          <InsightCard {...insight} />
        </ScrollRevealContainer>
      ))}
    </div>
  )
}
