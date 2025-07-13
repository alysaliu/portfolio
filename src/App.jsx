import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { motion } from 'motion/react'
import Navbar from './components/Navbar'
import './index.css'
import Work from './components/Work'
import Info from './components/Info'

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
    <BrowserRouter>
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

      <Routes>
        {/* Landing page */}
        <Route
            path="/"
            element={<Work />}
        />

        {/* Work page */}
        <Route
            path="/work"
            element={<Work />}
        />

        {/* Info page */}
        <Route
            path="/info"
            element={<Info />}
        />
        
      </Routes>

      {/* Footer */}
      <motion.footer variants={itemVariants} className="bg-white border-gray-500 py-6 text-center text-gray-500 text-sm font-light">
        © 2025 Alysa Liu. All rights reserved. Built with React + Tailwind.
      </motion.footer>
    </motion.div>
    </BrowserRouter>
  )
}
