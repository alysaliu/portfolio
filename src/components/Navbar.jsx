import { useState } from 'react'
import { MenuIcon, XIcon, ChevronDownIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'


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
        <div className="p text-black"><a href="/work">ALYSA LIU</a></div>

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

          <Link to="/work"   className="hover:text-blue-500">Work</Link>
          <Link to="/info"   className="hover:text-blue-500">Info</Link>
          <Link
            to="https://drive.google.com/file/d/1mf6_ypfRXW_pkCfxM0lk-yAxK8lf-3UM/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            Resume
          </Link>
          {/* <Link to="/info"   className="hover:text-indigo-600">Play</Link> */}
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
            {/* <li><a href="#play"   className="block py-2 hover:text-indigo-600">Play</a></li> */}
          </ul>
        </nav>
      )}
    </header>
  )
}
