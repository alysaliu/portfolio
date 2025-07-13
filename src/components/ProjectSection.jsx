import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'

export default function ProjectSection({
  year,
  title,
  description,
  imageUrl,
  metrics,
  role,
  contributions,
  timeline,
}) {
  const sections = [
    { label: 'Metrics', content: metrics },
    { label: 'Role', content: role },
    { label: 'Contributions', content: contributions },
    { label: 'Timeline', content: timeline },
  ];
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="flex flex-col md:flex-row mb-16 gap-8">
      {/* Text side */}
      <div className="flex flex-col w-full md:w-1/4 p-4 gap-8 pt-4">
        <div className="flex flex-col gap-3">
          <p className="text-gray-500">{year}</p>
          <h3>{title}</h3>
        </div>
        
        <p>{description}</p>

        {/* Expandable details */}
        <div className="space-y-2">
          {sections.map((sec, idx) => {
            const isOpen = openIdx === idx
            return (
              <div key={sec.label}>
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center py-2 font-medium border-b border-gray-300"
                >
                  <p>{sec.label}</p>
                  <span className='text-md font-light text-black text-gray-500'>{isOpen ? '−' : '+'}</span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ ease: 'easeInOut', duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-2 text-gray-500">{sec.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>

{/* Image side */}
<div className="w-full md:w-3/4">
  <div className="relative group w-full overflow-hidden rounded-sm">
    {/* default image */}
    <img
      src={imageUrl}
      alt={title}
      className="w-full object-cover"
    />

    {/* centered CTA button */}
    <a
      href="/work"
      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      <span className="px-4 py-2 bg-black bg-opacity-60 text-white rounded-xl">
        Case study coming soon
      </span>
    </a>
  </div>
</div>

    </section>
  );
}
