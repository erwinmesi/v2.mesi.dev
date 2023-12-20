import image from '@/app/assets/images/project.webp'
import hn from '@/app/assets/images/hn.webp'

export const projects = [
  {
    show: true,
    name: 'Humble Nature Furniture E-commerce Website',
    url: 'https://humblenature.com',
    role: 'Front-end Developer',
    thumbnail: hn.src,
    thumbnailClass: 'h-[300px] md:h-[250px] lg:h-full',
    className: 'md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-2',
    about:
      '<p>Humble Nature is a creative and technological platform that provides unique, world-class architectural pieces and products.</p>',
    description:
      "<p>Developed the Frontend of the Humble Nature's E-commerce Website.</p><br><p>My role involved creating an engaging, user-friendly experience that highlights the brand's commitment to artistry, community, and environmental responsibility in the luxury market.</p>",
    technologies: ['Vue.js', 'Tailwind', 'Django'],
  },
  {
    show: false,
    name: 'KotApp',
    url: null,
    role: 'Front-end Developer',
    thumbnail: image.src,
    thumbnailClass: 'h-[300px] md:h-[250px] lg:h-[200px]',
    className: 'md:col-span-1 md:row-span-1 lg:col-span-2 lg:row-span-1',
    description:
      'Offers a motivational software package for companies who want to promote great values and motivation with their employees.',
    technologies: ['Vue.js', 'Tailwind', 'Laravel'],
  },
  {
    show: false,
    name: 'DAG Business Portal',
    url: null,
    role: 'Full-Stack Developer',
    thumbnail: image.src,
    thumbnailClass: 'h-[300px] md:h-[300px] lg:h-[200px]',
    className: 'md:col-span-2 md:row-span-1 lg:col-span-1 lg:row-span-1',
    description:
      'Offers a motivational software package for companies who want to promote great values and motivation with their employees.',
    technologies: ['Vue.js', 'Tailwind', 'Laravel'],
  },
  {
    show: false,
    name: 'Soumission Rapide',
    url: null,
    role: 'Front-end Developer',
    thumbnail: image.src,
    thumbnailClass: 'h-[300px] md:h-[200px] lg:h-full',
    className: 'md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-2',
    description:
      'Offers a motivational software package for companies who want to promote great values and motivation with their employees.',
    technologies: ['Vue.js', 'Tailwind', 'Laravel'],
  },
  {
    show: false,
    name: 'Google Ads Scraper',
    url: null,
    role: 'Full-Stack Developer',
    thumbnail: image.src,
    thumbnailClass: 'h-[300px] md:h-full lg:h-[200px]',
    className: 'md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-1',
    description:
      'Offers a motivational software package for companies who want to promote great values and motivation with their employees.',
    technologies: ['Vue.js', 'Tailwind', 'Laravel'],
  },
  {
    show: false,
    name: 'Pointer',
    url: null,
    role: 'Full-Stack Developer',
    thumbnail: image.src,
    thumbnailClass: 'h-[300px] md:h-[200px] lg:h-[200px]',
    className: 'md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1',
    description:
      'Offers a motivational software package for companies who want to promote great values and motivation with their employees.',
    technologies: ['Vue.js', 'Tailwind', 'Laravel'],
  },
]
