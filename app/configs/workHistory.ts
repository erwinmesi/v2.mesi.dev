import imgIcube from '@/app/assets/images/icube.webp'
import imgCodevol from '@/app/assets/images/codevol.webp'
import imgSri from '@/app/assets/images/sri.webp'
import imgUpwork from '@/app/assets/images/upwork.webp'

export type Job = {
  company_name: string
  company_url?: string
  logo_url: string
  position: string
  from: {
    month: string
    year: string
  }
  to: {
    month: string | null
    year: string
  }
  description: string
  technologies: string[]
}

export const workHistory: Job[] = [
  {
    company_name: 'AdTech SEZC',
    company_url: undefined,
    logo_url: imgCodevol.src,
    position: 'Full-Stack Web Developer (Remote)',
    description:
      '<p>I handle projects mainly intended to help clients with their marketing needs.</p><p>Primarily work on Marketing Websites such as Landing Pages, Advertising-related Web Apps and E-commerce Websites.</p>',
    technologies: [
      'Vue.js',
      'React.js',
      'Next.js',
      'Tailwind',
      'Flask',
      'Django',
      'Strapi',
    ],
    from: {
      month: 'Dec',
      year: '2017',
    },
    to: {
      month: null,
      year: 'Present',
    },
  },
  {
    company_name: 'i-Cube Digital Solutions, Inc.',
    company_url: 'https://i-cube-digitalsolutions.com/',
    logo_url: imgIcube.src,
    position: 'Senior Web Developer',
    description:
      '<p>Handled projects using various front-end and back-end tools.</p><p>Also did Project Management tasks — talking to clients, handling Scrum meetings, setting up sprints and handling project requirements and documentations.</p>',
    technologies: [
      'Vue.js',
      'Nuxt.js',
      'React.js',
      'Python',
      'Laravel',
      'Jira',
      'Confluence',
    ],
    from: {
      month: 'Jan',
      year: '2019',
    },
    to: {
      month: 'Sep',
      year: '2022',
    },
  },
  {
    company_name: 'Upwork',
    company_url: 'https://www.upwork.com/freelancers/~0199bd5921ffe7c943',
    logo_url: imgUpwork.src,
    position: 'Full-Stack Web and Cross-Platform Mobile Developer',
    description:
      '<p>This is when I really started working as a full-time freelancer. I handled projects from clients from different parts of the world.</p><p>This is when I learned how to work with clients remotely and learned the skills how to handle and retain clients.</p>',
    technologies: [
      'Vue.js',
      'Nuxt.js',
      'React.js',
      'Laravel',
      'Bootstrap',
      'Node.js',
      'PWA',
      'Ionic',
      'Angular',
    ],
    from: {
      month: 'Feb',
      year: '2018',
    },
    to: {
      month: 'Jan',
      year: '2019',
    },
  },
  {
    company_name: 'Associate Software Engineer',
    company_url: 'https://www.accenture.com/ph-en/',
    logo_url: imgIcube.src,
    position: 'Associate Software Engineer',
    description:
      '<p>I applied to be a Coder but was assigned as a SAP Consultant.</p><p>I resigned to follow my passion — Coding.</p>',
    technologies: ['SAP HCM', 'SAP MM'],
    from: {
      month: 'Dec',
      year: '2017',
    },
    to: {
      month: 'Feb',
      year: '2018',
    },
  },
  {
    company_name: 'Upwork',
    company_url: 'https://www.upwork.com/freelancers/~0199bd5921ffe7c943',
    logo_url: imgUpwork.src,
    position: 'Full-Stack Web Developer',
    description:
      '<p>After my 6-months from my first corporate job, I applied to Accenture. While processing my application, I tried entering Upwork freelancing. I was able to get some clients with small projects and worked as a full-time freelancer.</p><p>This is when I first learned how to work remotely.</p>',
    technologies: ['Vue.js', 'Laravel', 'Semantic UI', 'Loopback', 'Bootstrap'],
    from: {
      month: 'Sept',
      year: '2017',
    },
    to: {
      month: 'Dec',
      year: '2017',
    },
  },
  {
    company_name: 'Solution Resource Inc.',
    company_url: 'https://solutionsresource.com/',
    logo_url: imgSri.src,
    position: 'Software Development Engineer',
    description:
      '<p>This is where I started my career as a Software Developer. I started as an intern and was hired as a full-time employee after 4 months.</p><p>The highlight of my stay here is when I was assigned to a huge Philippine TV Network where I worked on one of their projects.</p>',
    technologies: [
      'Angular JS',
      'jQuery',
      'Java Spring',
      'Laravel',
      'Code Igniter',
    ],
    from: {
      month: 'Apr',
      year: '2017',
    },
    to: {
      month: 'Oct',
      year: '2017',
    },
  },
]
