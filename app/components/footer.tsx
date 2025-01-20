import { Mail } from 'lucide-react'
import Image from 'next/image'

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
  isEmail?: boolean
}

function SocialLink({ href, icon, label, isEmail }: SocialLinkProps) {
  return (
    <li>
      <a
        className="flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-neutral-100 dark:hover:bg-neutral-800 sm:h-8 sm:w-8" // 모바일에서 더 크게
        {...(!isEmail && {
          rel: 'noopener noreferrer',
          target: '_blank',
        })}
        href={href}
        aria-label={label}
      >
        <span className="flex items-center justify-center">{icon}</span>
      </a>
    </li>
  )
}

const socialLinks = [
  {
    href: 'https://github.com/iammiori',
    icon: (
      <Image
        src="github-mark.svg"
        alt="GitHub"
        width={20}
        height={20}
        className="h-6 w-6 dark:invert sm:h-5 sm:w-5" // 반응형 크기 조정
      />
    ),
    label: 'GitHub Profile',
  },
  {
    href: 'https://www.linkedin.com/in/miyeon-lee-a4868723a/',
    icon: (
      <Image
        src="linkedin-mark.svg"
        alt="Linkedin"
        width={20}
        height={20}
        className="h-6 w-6 dark:invert sm:h-5 sm:w-5" // 반응형 크기 조정
      />
    ),
    label: 'LinkedIn Profile',
  },
  {
    href: 'mailto:immioriii@gmail.com',
    icon: (
      <Mail className="h-6 w-6 text-neutral-800 dark:text-neutral-200 sm:h-5 sm:w-5" />
    ),
    isEmail: true,
    label: 'Send Email',
  },
]
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mb-8 flex flex-col items-center justify-center">
      <ul className="mt-8 flex flex-row space-x-2 md:space-x-3 lg:space-x-2">
        {socialLinks.map((link) => (
          <SocialLink key={link.href} {...link} />
        ))}
      </ul>
      <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300">
        © {currentYear} miori
      </p>
    </footer>
  )
}
