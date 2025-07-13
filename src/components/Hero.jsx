import React, {useRef} from 'react'
import { hover, motion } from 'motion/react'
import earthImg from '../assets/earth.png'
import handImg from '../assets/hand.png'
import brainImg from '../assets/brain.png'

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

    const values = [
        { icon: earthImg,   label: 'systems thinking' },
        { icon: handImg,    label: 'human interaction with tech' },
        { icon: brainImg,   label: 'product strategy' },
    ]

  return (
    <motion.section
      className="bg-grid bg-white max-w-screen-2xl mx-auto px-12 py-20"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      ref={ref}
    >
      <motion.div
        className="flex flex-col md:flex-row gap-8"
        variants={itemVariants}
      >
        {/* Spacer */}
        <motion.div className="flex flex-col w-full md:w-1/4" variants={itemVariants}>
        </motion.div>
        {/* Content */}
        <motion.div className="flex flex-col w-full md:w-3/4" variants={itemVariants}>
            {/* Intro copy */}
            <motion.div className="space-y-4" variants={itemVariants}>
            <h1 className=""> Alysa Liu helps people focus on the more important things in life.</h1>

            {/* <h3 className="">
                
            </h3> */}

            <div className="text-gray-500 leading-tight">
                <span className='font-sans font-light text-sm text-gray-500 tracking-tighter'>Currently </span>
                <span className='font-sans font-medium text-sm text-gray-500 tracking-tighter'>Product Designer @ Salesloft</span>
                <span className='font-sans font-light text-sm text-gray-500 tracking-tighter'>, graduated </span>
                <span className='font-sans font-medium text-sm text-gray-500 tracking-tighter'>UC Berkeley '23 </span>
                <span className='font-sans font-light text-sm text-gray-500 tracking-tighter'>with a bachelor's in </span>
                <span className='font-sans font-medium text-sm text-gray-500 tracking-tighter'>computer science, cognitive science, and design innovation. </span>
            </div>

            {/* Values row */}
            <motion.div variants={itemVariants}>
            <p className="mt-6 mb-4 text-gray-500">Fascinated by…</p>
            <ul className="flex flex-wrap gap-4">
                {values.map(({ icon, label }) => (
                <motion.li
                    key={label}
                    className="flex items-center"
                    variants={itemVariants}
                >
                    <div className="p-1 bg-white rounded-full border border-gray-200 shadow-sm w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <motion.img
                        src={icon}
                        alt={label}
                        className="max-w-full max-h-full object-contain"
                    />
                    </div>
                    <div className="h-px w-4 bg-gray-300" />
                    <span className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-700 whitespace-nowrap">
                    {label}
                    </span>
                </motion.li>
                ))}
            </ul>
            </motion.div>
        </motion.div>

        </motion.div>
        

        <motion.div variants={itemVariants} />

        
      </motion.div>
    </motion.section>
  )
}

export default Hero