'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ScrollRevealContainer({ children, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.3,
          delay: Math.min(delay, 0.2),
          ease: 'easeOut',
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
