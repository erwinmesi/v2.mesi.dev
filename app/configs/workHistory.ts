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
    position: 'Full-Stack Web Developer',
    description: "Managed projects to enhance clients' marketing through websites, apps, and e-commerce.",
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
      month: null,
      year: 'Present',
    },
  },
  {
    company_name: 'i-Cube Digital Solutions, Inc.',
    company_url: 'https://i-cube-digitalsolutions.com/',
    logo_url: imgIcube.src,
    position: 'Senior Web Developer',
    description: "Led projects using front/back-end tools and handled project management tasks.",
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
    description: "Started full-time freelancing, gaining remote work and client management skills.",
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
    description: "Shifted from a Coder to SAP Consultant, then resigned to focus on coding.",
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
    description: "Explored Upwork freelancing, and embraced remote work.",
    technologies: ['Vue.js', 'Laravel', 'Semantic UI', 'Loopback', 'Bootstrap'],
    from: {
      month: 'Sep',
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
    description: "Started in software development, progressed from intern to full-time, worked on a major TV network project.",
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
