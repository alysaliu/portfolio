import React from 'react'
import { motion } from 'motion/react'
import Hero from './Hero'
import projects from '../data/projects'
import ProjectSection from './ProjectSection'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' } }
}

export default function Work() {
  return (
    <>
      {/* Hero */}
      <motion.div variants={itemVariants}>
        <Hero />
      </motion.div>

      {/* Case Studies */}
      <motion.main
        className="max-w-screen-2xl mx-auto px-8 py-10"
        variants={itemVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 mx-4 items-center">
          <div /> {/* spacer column */}
          <p className="text-gray-500 mb-4 md:ml-4">
            Selected case studies
          </p>
        </div>

        {projects.map(proj => (
          <motion.div key={proj.id} variants={itemVariants}>
            <ProjectSection {...proj} />
          </motion.div>
        ))}
      </motion.main>
    </>
  )
}
