import { Mail } from 'lucide-react'
import Image from 'next/image'

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  isEmail?: boolean
}

function SocialLink({ href, icon, isEmail }: SocialLinkProps) {
  return (
    <li>
      <a
        className="flex items-center text-neutral-600 transition-all hover:scale-125"
        {...(!isEmail && {
          rel: 'noopener noreferrer',
          target: '_blank',
        })}
        href={href}
      >
        {icon}
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
        className="dark:invert"
      />
    ),
  },
  {
    href: 'https://www.linkedin.com/in/miyeon-lee-a4868723a/',
    icon: (
      <Image
        src="linkedin-mark.svg"
        alt="Linkedin"
        width={20}
        height={20}
        className="dark:invert"
      />
    ),
  },
  {
    href: 'mailto:immioriii@gmail.com',
    icon: <Mail size={20} className="text-neutral-800 dark:text-neutral-200" />,
    isEmail: true,
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mb-4 flex flex-col items-center justify-center">
      <ul className="font-sm mt-8 flex flex-row space-x-4 text-neutral-600 dark:text-neutral-300">
        {socialLinks.map((link) => (
          <SocialLink key={link.href} {...link} />
        ))}
      </ul>
      <p className="mt-2 text-neutral-600 dark:text-neutral-300">
        © {currentYear} miori
      </p>
    </footer>
  )
}
