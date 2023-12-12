export const env = process.env.NODE_ENV
import imgReact from '@/app/assets/images/reactjs.webp'
import imgNext from '@/app/assets/images/nextjs.webp'
import imgVue from '@/app/assets/images/vuejs.webp'
import imgNuxt from '@/app/assets/images/nuxtjs.webp'
import imgTailwind from '@/app/assets/images/tailwind.webp'
import imgLaravel from '@/app/assets/images/laravel.webp'
import imgFlask from '@/app/assets/images/flask.webp'
import imgStrapi from '@/app/assets/images/strapi.webp'

export const skills = [
  {
    name: 'React.js',
    group: 'JavaScript',
    years: 5,
    logo: imgReact.src,
    className: 'border-[#61DAFB]',
  },
  {
    name: 'Next.js',
    group: 'JavaScript',
    years: 5,
    logo: imgNext.src,
    className: 'border-[#000000]',
  },
  {
    name: 'Vue.js',
    group: 'JavaScript',
    years: 7,
    logo: imgVue.src,
    className: 'border-[#4FC08D]',
  },
  {
    name: 'Nuxt.js',
    group: 'JavaScript',
    years: 7,
    logo: imgNuxt.src,
    className: 'border-[#00DC82]',
  },
  {
    name: 'Tailwind',
    group: 'Styling',
    years: 5,
    logo: imgTailwind.src,
    className: 'border-[#06B6D4]',
  },
  {
    name: 'Laravel',
    group: 'Backend',
    years: 7,
    logo: imgLaravel.src,
    className: 'border-[#FF2D20]',
  },
  {
    name: 'Flask',
    group: 'Backend',
    years: 1,
    logo: imgFlask.src,
    className: 'border-[#000000]',
  },
  {
    name: 'Strapi',
    group: 'CMS',
    years: 1,
    logo: imgStrapi.src,
    className: 'border-[#8C4BFF]',
  },
]
