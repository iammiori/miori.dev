import { RssIcon } from 'lucide-react'
import Image from 'next/image'

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  label: string
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <li>
      <a
        className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
        rel="noopener noreferrer"
        target="_blank"
        href={href}
      >
        {icon}
        <p className="ml-2 h-7">{label}</p>
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
        width={16}
        height={16}
        className="dark:invert"
      />
    ),
    label: 'GitHub',
  },
  {
    href: '/rss',
    icon: <RssIcon size={16} />,
    label: 'RSS',
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mb-4">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        {socialLinks.map((link) => (
          <SocialLink key={link.href} {...link} />
        ))}
      </ul>
      <p className="mt-4 text-neutral-600 dark:text-neutral-300">
        © {currentYear} miori
      </p>
    </footer>
  )
}
