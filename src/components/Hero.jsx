import React, {useRef} from 'react'
import { hover, motion } from 'motion/react'
import GridReveal from './GridReveal'

// Animation variants for container and items
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: 'easeOut' },
  },
}

const Hero = () => {
    const ref = useRef(null);

  return (
    <motion.section
      className="relative bg-cream max-w-screen-2xl mx-auto px-12 py-[180px] overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      ref={ref}
    >
      <GridReveal />
      <motion.div
        className="relative z-10 flex flex-col items-center text-center gap-8"
        variants={containerVariants}
      >
        {/* Name lockup: display name */}
        <motion.div className="flex items-center justify-center" variants={itemVariants}>
          <h1 className="font-newspirit font-normal text-black leading-none tracking-tight text-6xl sm:text-7xl md:text-8xl lg:text-[200px]">
            Alysa Liu
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="max-w-3xl font-sans font-light text-lg md:text-xl text-black tracking-tighter"
          variants={itemVariants}
        >
          Product designer who ships code and owns product decisions. Obsessed with craft, taste, and details users feel.
        </motion.p>
      </motion.div>

    </motion.section>
  )
}

export default Hero