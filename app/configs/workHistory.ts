import imgIcube from '@/app/assets/images/icube.webp'
import imgCodevol from '@/app/assets/images/codevol.webp'
import imgSri from '@/app/assets/images/sri.webp'
import imgUpwork from '@/app/assets/images/upwork.webp'

export type Job = {
  company_name: string
  company_location: string
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
    company_location: 'Cayman Islands',
    company_url: undefined,
    logo_url: imgCodevol.src,
    position: 'Full-Stack Web Developer',
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
      month: 'Sep',
      year: '2022',
    },
    to: {
      month: 'Mar',
      year: '2024',
    },
  },
  {
    company_name: 'i-Cube Digital Solutions, Inc.',
    company_location: 'Makati, Philippines',
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
    company_location: 'Online Workplace',
    company_url: 'https://www.upwork.com/fl/erwinmesi',
    logo_url: imgUpwork.src,
    position: 'Full-Stack Web and Cross-Platform Mobile Developer',
    description:
      '<p>After 6-months from my first corporate job, I started working as a full-time freelancer. I handled projects from clients from different parts of the world.</p><p>This is where I learned how to work with clients remotely and learned the skills to handle and retain clients.</p>',
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
      month: 'Oct',
      year: '2017',
    },
    to: {
      month: 'Jan',
      year: '2019',
    },
  },
  {
    company_name: 'Solution Resource Inc.',
    company_location: 'Quezon City, Philippines',
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
