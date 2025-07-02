import { useState } from 'react'
import { MenuIcon, XIcon, ChevronDownIcon } from '@heroicons/react/outline'

export default function Navbar() {
  const [isNavOpen,   setIsNavOpen]   = useState(false)
  const [isWorkOpen,  setIsWorkOpen]  = useState(false)

  const projects = [
    { name: 'Salesloft Rhythm', href: '/#rhythm' },
    { name: 'Salesloft Live Feed',     href: '/#live-feed' },
    { name: 'Playbook',    href: '/#playbook' },
    { name: 'Lore',    href: '/#lore' },
  ]

  return (
    <header className="bg-white">
      <div className="container max-w-screen-2xl mx-auto px-12 py-4 flex items-center justify-between">
        {/* Logo / Branding */}
        <div className="p text-black">ALYSA LIU</div>

        {/* Hamburger (mobile only) */}
        <button 
          onClick={() => setIsNavOpen(o => !o)} 
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {isNavOpen
            ? <XIcon className="w-6 h-6"/>
            : <MenuIcon className="w-6 h-6"/>
          }
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 text-sm uppercase">
  <div
    className="relative"
    onMouseEnter={() => setIsWorkOpen(true)}
    onMouseLeave={() => setIsWorkOpen(false)}
  >
    <button className="flex items-center space-x-1 hover:text-indigo-600">
      <span>WORK</span>
      <ChevronDownIcon
        className={`w-4 h-4 transition-transform duration-500 ease-in-out ${isWorkOpen ? 'rotate-180' : ''}`}
      />
    </button>

    {isWorkOpen && (
      <ul
        className="absolute left-0 top-full mt-2 bg-white rounded shadow-lg text-gray-800"
        onMouseEnter={() => setIsWorkOpen(true)}
        onMouseLeave={() => setIsWorkOpen(false)}
      >
        {projects.map(p => (
          <li key={p.name}>
            <a href={p.href} className="block px-4 py-2 hover:bg-gray-100">
              {p.name}
            </a>
          </li>
        ))}
      </ul>
    )}
  </div>

  <a href="#info"   className="hover:text-indigo-600">Info</a>
  <a href="#resume" className="hover:text-indigo-600">Resume</a>
  <a href="#play"   className="hover:text-indigo-600">Play</a>
</nav>


      </div>

      {/* Mobile nav */}
      {isNavOpen && (
        <nav className="md:hidden bg-white border-t">
          <ul className="space-y-1 p-4 text-sm uppercase">
            <li>
              <button
                onClick={() => setIsWorkOpen(o => !o)}
                className="w-full flex justify-between items-center py-2 font-medium"
              >
                <span>WORK</span>
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${isWorkOpen ? 'rotate-180' : ''}`}/>
              </button>
              {isWorkOpen && (
                <ul className="pl-4 space-y-1">
                  {projects.map(p => (
                    <li key={p.name}>
                      <a href={p.href} className="block py-1 hover:text-indigo-600">
                        {p.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li><a href="#info"   className="block py-2 hover:text-indigo-600">Info</a></li>
            <li><a href="#resume" className="block py-2 hover:text-indigo-600">Resume</a></li>
            <li><a href="#play"   className="block py-2 hover:text-indigo-600">Play</a></li>
          </ul>
        </nav>
      )}
    </header>
  )
}
