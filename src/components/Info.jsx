// src/components/About.jsx
import React from 'react'
import profilePic from '../assets/alysa-profile.png'
import thumbnail from '../assets/alysathumbnail.png'
import salesloftLogo from '../assets/Salesloftlogo.png'
import playbookLogo from '../assets/playbooklogo.jpeg'
import mastercardLogo from '../assets/mastercardlogo.png'
import anchorageLogo from '../assets/anchoragelogo.png'
import kahaniLogo from '../assets/kahani.png'
import berkeleyLogo from '../assets/berkeleylogo.png'


export default function About() {
  return (
    <main className="max-w-screen-lg mx-auto px-12 py-12">
      {/* Top intro */}
      <div className="flex flex-col md:flex-row items-start gap-16">
        
        

        {/* Intro copy */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className='text-large'>
            <span className='font-medium'>
            I’m Alysa <span className="font-light text-gray-500">(uh-LISS-uh)</span>, a <span className='font-medium'>product designer / developer on a mission to help people focus on what matters.</span> 
            </span>
          </h2>
          <p>
            After attending a health-vocation high school in New Jersey and volunteering in ERs, CS courses at Berkeley showed me that listening to people and smoothing out friction points with digital products can improve lives at scale—no scrubs required. That realization sparked my passion for the end-to-end product process and the impact it can have on people. I'm especially interested in the realm of tools that enable creativity.
          </p>
          <p>
            Outside work, you’ll find me coding personal apps, drawing, snapping photos, or knitting. <span role="img" aria-label="knitting">🧶</span>
          </p>
        </div>

        {/* Profile photo */}
        <div className="w-full h-full md:w-1/2">
          <img
            src={profilePic}
            alt="Alysa smiling at the beach"
            className="h-[300px] w-full rounded-lg shadow-sm object-cover"
          />
        </div>
      </div>

      <section className="mt-12">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Thumbnail container: make relative and group */}
          <div className="relative group w-full md:w-1/2">
            <img
              src={thumbnail}
              alt="video thumbnail"
              className="w-full h-full rounded-lg shadow-sm object-cover"
            />
            {/* Overlay Play button */}
            <a
              href="https://youtube.com/shorts/Dzd50VILkZg?feature=share"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-end justify-start opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <span className="px-4 py-2 bg-blue-400 bg-opacity-60 text-white rounded-xl m-4">
                Play
              </span>
            </a>
          </div>
          <h4>Getting to know me just through text is probably hard... try this video! ▶️</h4>
        </div>
      </section>


      {/* Experiences */}
      <section className="mt-12">
        <h4 className='mb-4'>Experiences</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {[
            { logo: salesloftLogo, title: 'Product Designer', subtitle: 'Salesloft (acquired Drift)', dates: '2023–2025' },
            { logo: playbookLogo, title: 'Lead Product Designer', subtitle: 'Playbook (Contract)', dates: '2023' },
            { logo: mastercardLogo, title: 'Product Designer', subtitle: 'Mastercard (Contract)', dates: '2022' },
            { logo: anchorageLogo, title: 'Product Designer', subtitle: 'Anchorage Digital (internship)', dates: '2022' },
            { logo: kahaniLogo, title: 'Lead Product Designer', subtitle: 'Kahani (NPO)', dates: '2022' },
            { logo: berkeleyLogo, title: 'UX Researcher', subtitle: 'UC Berkeley Makerspace', dates: '2021–2022' },
          ].map((exp, i) => (
            <div key={i} className="flex flex-col items-start text-start">
                <div className="bg-gray-100 border border-gray-200 p-6 rounded-lg mb-4">
                    <img src={exp.logo} alt="" className="size-16 mb-2 rounded-lg shadow-md" />
                </div>
              
              <p>{exp.title}</p>
              <p className='text-gray-500'>{exp.subtitle}</p>
              <p className='text-gray-500'>{exp.dates}</p>
            </div>
          ))}
        </div>
      </section>

      <section className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-16'>
         {/* Skills */}
         <div className="space-y-8">
          <div>
            <h4 className='mb-4'>Skills</h4>
            <p>
              I partner across functions to launch high-visibility features—5+ cross-platform releases at Salesloft/Drift, a 48% efficiency gain in Mastercard Connect, and more. I combine design empathy, strategic product metrics, and collaboration with engineering to shape the roadmap and drive measurable impact through user data.
            </p>
          </div>
        </div>

        {/* Education */}
        <div>
            <h4 className='mb-4'>Education</h4>
            <p>
              <strong>University of California, Berkeley</strong><br/>
              B.A. Computer Science, Cognitive Science, Design Innovation<br/>
              <span className='text-gray-500'>2020–2023, GPA: 3.8</span>
            </p>
          </div>
      </section>

      <section className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-16'>
         {/* Involvements */}
         <div className="space-y-2">
            <h4 className='mb-4'>Involvements</h4>
            <div>
                <a href="https://www.berkeleyinnovation.org"
                target="_blank"
                rel="noopener noreferrer"
                className='font-sans
                underline
                font-medium
                text-sm
                text-black
                tracking-tighter'
                > Berkeley Innovation
                </a>

                <p>External VP, Project Lead, Consultant</p>
                <p className='text-gray-500'>2022–2023</p>
            </div>

            <div>
                <a href="https://inventioncorps.org/"
                target="_blank"
                rel="noopener noreferrer"
                className='font-sans
                underline
                font-medium
                text-sm
                text-black
                tracking-tighter'
                > Invention Corps
                </a>

                <p>Head of Workshops, Socials, Recruitment, Project Lead, Consultant</p>
                <p className='text-gray-500'>2021–2023</p>
            </div>
            
            
        </div>

        {/* Tools */}
        <div>
            <h4 className='mb-4'>Tools</h4>
            <div className='flex flex-col'>
              <p>Figma</p>
              <p>Mixpanel</p>
              <p>Looker</p>
              <p>HTML/CSS/JS</p>
              <p>React/Tailwind</p>
              <p>ChatGPT, Claude, Google AI Studio, Figma Make</p>
              <p>Adobe Suite</p>
            </div>
          </div>
      </section>
      
    </main>
  )
}
