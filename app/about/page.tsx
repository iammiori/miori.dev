import { AboutBlogSection } from './components/AboutBlogSection'
import InsightsSection from './components/InsightsSection'
import { ProfileSection } from './components/ProfileSection'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">About Me</h1>
      <div className="max-w-4xl mx-auto p-6 space-y-12">
        <ProfileSection
          name={'miori (이미연)'}
          bio={
            '문제의 본질을 고민하고 효율적인 가치를 만들고 싶은 프론트엔드 엔지니어'
          }
          avatarUrl={'/icon.png'}
        />
        <InsightsSection />
        <AboutBlogSection />
      </div>
    </section>
  )
}
