import salesloftRhythmImg from '../assets/salesloft-rhythm.png'
import livefeedImg         from '../assets/livefeedmobile-1.png'
import playbookImg         from '../assets/playbooktablet.jpeg'
import loreImg             from '../assets/Lore.png'

const projects = [
    {
      id: 'salesloft-rhythm',
      year: 2025,
      title: 'Salesloft Rhythm — never miss a beat',
      description: `Rhythm was inflexible and off-beat for sellers using it in the past.  
        I redesigned it to better fit how our sellers worked by creating customizable dashboard widgets, 
        filtering + grouping functionality of upcoming tasks, and a new default account view.`,
      imageUrl: salesloftRhythmImg,
      hoverImageUrl: 'src/assets/test-1.png',
      metrics: 'All-time high CSAT score, which continues to rise.',
      role: 'Lead Product Designer, owned discovery through launch.',
      contributions: 'UX research, wireframes, hi-fi mocks, prototyping, and user testing.',
      timeline: 'Jan 2025 – Jun 2025',
    },
    {
        id: 'salesloft-livefeed',
        year: 2024,
        title: 'Salesloft—strike intent while it’s hot',
        description: `High-volume SDRs struggle with prioritizing outreach after buyers engage. 
            I identified opportunities to improve the UX of Live feed in Salesloft and drive adoption 
            for our flagship product, Rhythm.`,
        imageUrl: livefeedImg,
        hoverImageUrl: 'src/assets/livefeed-blurry.png',
        metrics: 'All-time high CSAT score, which continues to rise.',
        role: 'Lead Product Designer, owned discovery through launch.',
        contributions: 'UX research, wireframes, hi-fi mocks, prototyping, and user testing.',
        timeline: 'Aug 2024 – Dec 2024',
      },
      {
        id: 'playbook',
        year: 2023,
        title: 'Playbook—portfolios with a click of a button',
        description: `Client handoffs and portfolio creation is a time consuming and generic process for creatives. My team and I added customization for users to create branded website in just a few clicks. Over 61k websites have been created with the feature we designed. `,
        imageUrl: playbookImg,
        hoverImageUrl: '/assets/rhythm-desktop-1.png',
        metrics: '61k users',
        role: 'Lead Product Designer, guided team of 5 product designers to develop design proposals for Playbook team.',
        contributions: 'UX research, wireframes, hi-fi mocks, prototyping.',
        timeline: 'Feb 2023 – May 2023',
      },
      {
        id: 'lore',
        year: 2025,
        title: 'Lore—experience TV shows and movies with friends',
        description: `Imagine if Letterboxd, Serializd, and Beli had a baby. This is a personal project that my friends and I use to stay connected. Check it out at https://lore-chi.vercel.app! `,
        imageUrl: loreImg,
        hoverImageUrl: 'src/assets/rhythm-desktop-1.png',
        metrics: 'Released MVP to 4 beta testers',
        role: 'Lead Product Designer, owned discovery through launch. I worked with 3 other team members to develop the concept.',
        contributions: 'UX research, wireframes, hi-fi mocks, prototyping, and user testing.',
        timeline: 'Nov 2024 – Jun 2025',
      }
    // …add more projects here
  ];
  
  export default projects;