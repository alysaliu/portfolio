import React, {useRef} from 'react'
import { hover, motion } from 'motion/react'
import GridReveal from './GridReveal'

// Animation variants for container and items
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const Hero = () => {
    const ref = useRef(null);

  return (
    <motion.section
      className="relative bg-white max-w-screen-2xl mx-auto px-12 py-[180px] overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      ref={ref}
    >
      <GridReveal />
      <motion.div
        className="relative z-10 flex flex-col md:flex-row gap-8"
        variants={itemVariants}
      >
        {/* Spacer */}
        <motion.div className="flex flex-col w-full md:w-1/4" variants={itemVariants}>
        </motion.div>
        {/* Content */}
        <motion.div className="flex flex-col w-full md:w-3/4" variants={itemVariants}>
            {/* Intro copy */}
            <motion.div className="space-y-4" variants={itemVariants}>
            <h1 className=""> Alysa Liu designs AI tools that take the busywork out of complex, high-stakes work — so people can focus on the decisions that matter.</h1>

            <p className="text-lg text-gray-700">Senior product designer who ships code and owns product decisions. Took Supio's data-extraction flow from days→minutes and drove &gt;20% lift in DAU/WAU. Obsessed with craft, taste, and details users feel.</p>

            </motion.div>
        </motion.div>

        </motion.div>
        

        <motion.div variants={itemVariants} />

    </motion.section>
  )
}

export default Hero