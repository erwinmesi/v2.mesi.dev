import image from '@/app/assets/images/project.webp'
import hn from '@/app/assets/images/hn.webp'
import nodelife from '@/app/assets/images/nodelife.webp'
import wsag from '@/app/assets/images/wsag.webp'
import prozess from '@/app/assets/images/prozess.webp'
import dag from '@/app/assets/images/dag.webp'

export const projects = [
  {
    show: true,
    active: true,
    name: 'Humble Nature Furniture E-commerce Website',
    domain: 'humblenature.com',
    url: 'https://humblenature.com',
    role: 'Front-end Developer',
    thumbnail: hn.src,
    thumbnailClass: 'h-[300px] md:h-[250px] lg:h-full',
    className: 'md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-2',
    about:
      '<p>Humble Nature is a creative and technological platform that provides unique, world-class architectural pieces and products.</p>',
    responsibility:
      "<p>Developed the frontend of the Humble Nature's E-commerce Website.</p><br><p>My role involved creating an engaging, user-friendly experience that highlights the brand's commitment to artistry, community, and environmental responsibility in the luxury market.</p>",
    technologies: ['Vue.js', 'Tailwind', 'Django'],
  },
  {
    show: true,
    active: false,
    name: 'Google Ads Web Scraper',
    domain: null,
    url: null,
    role: 'Full-Stack Developer',
    thumbnail: wsag.src,
    thumbnailClass: 'h-[300px] md:h-[250px] lg:h-[200px]',
    className: 'md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1',
    about:
      'The Niche-Specific Google Ads Scraper is a robust tool designed to automate the extraction of Google Advertisements based on user-defined niche markets. This project was born out of the need for efficient, targeted ad analysis for niche marketing strategies. It offers a streamlined approach to gather ad data, helping marketers and businesses to understand their competition and market trends better.',
    responsibility:
      '<p>I developed a scraper to automate the extraction of Google Ads based on user-defined niche markets.</p><p>The scraper was coded with the ReCaptcha-bypass in mind thru the use of proxies to avoid getting blocked by Google.</p>',
    technologies: ['Python', 'Beautiful Soup', 'Nuxt.js', 'Laravel'],
  },
  {
    show: true,
    active: false,
    name: 'NodeLife.io',
    domain: 'nodelife.io',
    url: 'https://x.com/PORY8ON/status/1519643332355497984',
    role: 'Front-end Developer',
    thumbnail: nodelife.src,
    thumbnailClass: 'h-[300px] md:h-[300px] lg:h-[200px]',
    className: 'md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-1',
    about:
      'Free crypto node & staking investment tracker. The easiest way to track your crypto node portfolio.',
    responsibility:
      '<p>Developed the frontend interface for NodeLife.io, a comprehensive and user-friendly platform for tracking cryptocurrency node and staking investments.</p>',
    technologies: ['Vue.js', 'Tailwind'],
  },
  {
    show: true,
    active: true,
    name: 'Prozess ERP',
    domain: null,
    url: null,
    role: 'Front-end Developer',
    thumbnail: prozess.src,
    thumbnailClass: 'h-[300px] md:h-[200px] lg:h-full',
    className: 'md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-2',
    about: 'Enably is a partner to whom you can entrust your business IT. We know what it takes to help our clients succeed. We believe strongly in doing a job once & doing it well. We provide cost effective, enterprise grade IT solutions for every business. Technology & creativity combined, delivering innovative business solutions.',
    responsibility:
      "Worked in developing the features for an ERP system that aligned with the company's mission of managing data effectively.",
    technologies: ['Vue.js', 'Vuexy', 'Vuex', 'Bootstrap'],
  },
  {
    show: true,
    active: true,
    name: 'DAG Business Portal',
    domain: null,
    url: null,
    role: 'Full-Stack Developer',
    thumbnail: dag.src,
    thumbnailClass: 'h-[300px] md:h-full lg:h-[200px]',
    // className: 'md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-1',
    className: 'md:col-span-1 md:row-span-2 lg:col-span-2 lg:row-span-1',
    about: 'DAG is a private company based in Alkmaar, the Netherlands, founded in 2016. It specializes in corporate finance and asset management services. Their offerings include debt factoring, crowdfunding, purchase financing, consultancy, and financial advice.',
    responsibility:
      "<p>Developed a comprehensive web application for DAG, a finance and asset management company.</p><p>The app features user-friendly interfaces for services like debt factoring, crowdfunding, and financial consulting.</p>",
    technologies: ['Laravel', 'Vue.js', 'Bootstrap', 'Snappy PDF', 'Google Charts'],
  },
  {
    show: false,
    active: true,
    name: 'Pointer',
    domain: null,
    url: null,
    role: 'Full-Stack Developer',
    thumbnail: image.src,
    thumbnailClass: 'h-[300px] md:h-[200px] lg:h-[200px]',
    className: 'md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1',
    about: '',
    responsibility:
      'Offers a motivational software package for companies who want to promote great values and motivation with their employees.',
    technologies: ['Vue.js', 'Tailwind', 'Laravel'],
  },
]
