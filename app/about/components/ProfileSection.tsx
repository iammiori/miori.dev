'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import ScrollRevealContainer from './ScrollRevealContainer'

import { Card } from '@/components/ui/card'

interface Props {
  name: string
  bio: string
  avatarUrl: string
}

export function ProfileSection({ name, bio, avatarUrl }: Props) {
  return (
    <ScrollRevealContainer>
      <Card className="p-6 bg-background/80 backdrop-blur-sm dark:bg-slate-600/20">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <motion.div
            className="relative w-24 h-24"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="rounded-full h-full w-full border-2 border-border dark:border-slate-600/40">
              <Image
                src={avatarUrl}
                alt="profile"
                width={96}
                height={96}
                className="rounded-full object-cover"
                priority
              />
            </div>
          </motion.div>

          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-2xl font-bold text-foreground dark:text-slate-200">
              {name}
            </h1>
            <p className="text-lg text-muted-foreground dark:text-slate-400">
              {bio}
            </p>
          </div>
        </div>
      </Card>
    </ScrollRevealContainer>
  )
}
