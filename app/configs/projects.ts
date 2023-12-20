import image from '@/app/assets/images/project.webp'
import hn from '@/app/assets/images/hn.webp'
import nodelife from '@/app/assets/images/nodelife.webp'
import wsag from '@/app/assets/images/wsag.webp'

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
    show: false,
    active: true,
    name: 'KotApp',
    domain: null,
    url: null,
    role: 'Front-end Developer',
    thumbnail: image.src,
    thumbnailClass: 'h-[300px] md:h-[200px] lg:h-full',
    className: 'md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-2',
    about: '',
    responsibility:
      'Offers a motivational software package for companies who want to promote great values and motivation with their employees.',
    technologies: ['Vue.js', 'Tailwind', 'Laravel'],
  },
  {
    show: false,
    active: true,
    name: 'DAG Business Portal',
    domain: null,
    url: null,
    role: 'Full-Stack Developer',
    thumbnail: image.src,
    thumbnailClass: 'h-[300px] md:h-full lg:h-[200px]',
    className: 'md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-1',
    about: '',
    responsibility:
      'Offers a motivational software package for companies who want to promote great values and motivation with their employees.',
    technologies: ['Vue.js', 'Tailwind', 'Laravel'],
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
