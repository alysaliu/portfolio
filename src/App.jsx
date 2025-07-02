import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import projects from './data/projects'
import ProjectSection from './components/ProjectSection'
import './index.css'
import Hero from './components/Hero'

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.75, ease: 'easeOut' } }
}

export default function App() {
  return (
    <motion.div
      className="bg-white min-h-screen font-sans text-gray-900"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Responsive header */}
      <motion.div variants={itemVariants}>
        <Navbar />
      </motion.div>

      {/* Hero section */}
      <motion.div variants={itemVariants}>
        <Hero />
      </motion.div>

      {/* Main content */}
      <motion.main
        className="max-w-screen-2xl mx-auto px-8 py-10"
        variants={itemVariants}
      >
        {/* Intro text */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 items-center">
          <div></div>
          <p className="text-gray-500 mb-4 ml-6">
            Selected case studies
          </p>
        </motion.div>

        {/* Project sections */}
        {projects.map((proj) => (
          <motion.div key={proj.id} variants={itemVariants}>
            <ProjectSection {...proj} />
          </motion.div>
        ))}
      </motion.main>

      {/* Footer */}
      <motion.footer variants={itemVariants} className="bg-white border-t py-6 text-center text-gray-500 text-sm">
        © 2025 Alysa Liu. All rights reserved. Built with React + Tailwind.
      </motion.footer>
    </motion.div>
  )
}
