'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { Card } from '@/components/ui/card'

interface Props {
  name: string
  bio: string
  avatarUrl: string
}

export function ProfileSection({ name, bio, avatarUrl }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <Card className="p-6 bg-background/80 backdrop-blur-sm dark:bg-gray-900">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <motion.div
            className="relative w-24 h-24"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="rounded-full h-full w-full border-2 border-border">
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
            <motion.h1
              className="text-2xl font-bold text-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {name}
            </motion.h1>
            <p className="text-lg text-muted-foreground">{bio}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
