import imgReact from '@/app/assets/images/reactjs.webp'
import imgNext from '@/app/assets/images/nextjs.webp'
import imgVue from '@/app/assets/images/vuejs.webp'
import imgNuxt from '@/app/assets/images/nuxtjs.webp'
import imgTailwind from '@/app/assets/images/tailwind.webp'
import imgLaravel from '@/app/assets/images/laravel.webp'
import imgFlask from '@/app/assets/images/flask.webp'
import imgStrapi from '@/app/assets/images/strapi.webp'
import imgTs from '@/app/assets/images/ts.webp'
import imgFigma from '@/app/assets/images/figma.webp'
import imgIonic from '@/app/assets/images/ionic.webp'
import imgMySQL from '@/app/assets/images/mysql.webp'
import imgMongoDB from '@/app/assets/images/mongodb.webp'
import imgPuppeteer from '@/app/assets/images/puppeteer.webp'
import imgNode from '@/app/assets/images/node.webp'
import imgPinia from '@/app/assets/images/pinia.webp'
import imgVuex from '@/app/assets/images/vuex.webp'
import imgRedux from '@/app/assets/images/redux.webp'
import imgZustand from '@/app/assets/images/zustand.webp'
import imgBeautifulSoup from '@/app/assets/images/beautifulsoup.webp'
import imgJs from '@/app/assets/images/js.webp'
import imgPHP from '@/app/assets/images/php.webp'
import imgPython from '@/app/assets/images/python.webp'
import imgSass from '@/app/assets/images/sass.webp'
import imgGit from '@/app/assets/images/git.webp'


export const skillGroup = {
  AUTOMATION: 'Automation',
  BACKEND: 'Backend',
  CMS: 'CMS',
  DB: 'Database',
  DESIGN: 'Design',
  FRONTEND: 'Frontend',
  MOBILE: 'Mobile',
  STATE_MGMT: 'State Management',
  STYLING: 'Styling',
  VCS: 'Version Control',
  WEB_SCRAPING: 'Web Scraping',
}

export const skills = [
  {
    name: 'React.js',
    group: skillGroup.FRONTEND,
    years: 6,
    logo: imgReact.src,
    className: 'border-[#61DAFB]',
  },
  {
    name: 'Next.js',
    group: skillGroup.FRONTEND,
    years: 6,
    logo: imgNext.src,
    className: 'border-[#000000]',
  },
  {
    name: 'Laravel',
    group: skillGroup.BACKEND,
    years: 8,
    logo: imgLaravel.src,
    className: 'border-[#FF2D20]',
  },
  {
    name: 'Vue.js',
    group: skillGroup.FRONTEND,
    years: 8,
    logo: imgVue.src,
    className: 'border-[#4FC08D]',
  },
  {
    name: 'Nuxt.js',
    group: skillGroup.FRONTEND,
    years: 8,
    logo: imgNuxt.src,
    className: 'border-[#00DC82]',
  },
  {
    name: 'Tailwind',
    group: skillGroup.STYLING,
    years: 6,
    logo: imgTailwind.src,
    className: 'border-[#06B6D4]',
  },
  {
    name: 'Flask',
    group: skillGroup.BACKEND,
    years: 1,
    logo: imgFlask.src,
    className: 'border-[#000000]',
  },
  {
    name: 'Strapi',
    group: skillGroup.CMS,
    years: 1,
    logo: imgStrapi.src,
    className: 'border-[#8C4BFF]',
  },
  {
    name: 'JavaScript',
    group: skillGroup.FRONTEND,
    years: 8,
    logo: imgJs.src,
    className: 'border-[#F7DF1E]',
  },
  {
    name: 'TypeScript',
    group: skillGroup.FRONTEND,
    years: 8,
    logo: imgTs.src,
    className: 'border-[#3178C6]',
  },
  {
    name: 'PHP',
    group: skillGroup.BACKEND,
    years: 8,
    logo: imgPHP.src,
    className: 'border-[#777BB4]',
  },
  {
    name: 'Python',
    group: skillGroup.BACKEND,
    years: 4,
    logo: imgPython.src,
    className: 'border-[#3776AB]',
  },
  {
    name: 'SASS / SCSS',
    group: skillGroup.STYLING,
    years: 8,
    logo: imgSass.src,
    className: 'border-[#CC6699]',
  },
  {
    name: 'Figma',
    group: skillGroup.DESIGN,
    years: 3,
    logo: imgFigma.src,
    className: 'border-[#9C5DFF]',
  },
  {
    name: 'Ionic',
    group: skillGroup.MOBILE,
    years: 3,
    logo: imgIonic.src,
    className: 'border-[#3880FF]',
  },
  {
    name: 'Git / GitFlow',
    group: skillGroup.VCS,
    years: 8,
    logo: imgGit.src,
    className: 'border-[#F05032]',
  },
  {
    name: 'Node.js',
    group: skillGroup.BACKEND,
    years: 5,
    logo: imgNode.src,
    className: 'border-[#339933]',
  },
  {
    name: 'MySQL',
    group: skillGroup.DB,
    years: 8,
    logo: imgMySQL.src,
    className: 'border-[#4479A1]',
  },
  {
    name: 'MongoDB',
    group: skillGroup.DB,
    years: 5,
    logo: imgMongoDB.src,
    className: 'border-[#47A248]',
  },
  {
    name: 'Redux',
    group: skillGroup.STATE_MGMT,
    years: 5,
    logo: imgRedux.src,
    className: 'border-[#764ABC]',
  },
  {
    name: 'Zustand',
    group: skillGroup.STATE_MGMT,
    years: 3,
    logo: imgZustand.src,
    className: 'border-[#453E38]',
  },
  {
    name: 'Pinia',
    group: skillGroup.STATE_MGMT,
    years: 5,
    logo: imgPinia.src,
    className: 'border-[#8CDA3F]',
  },
  {
    name: 'Vuex',
    group: skillGroup.STATE_MGMT,
    years: 5,
    logo: imgVuex.src,
    className: 'border-[#42b983]',
  },
  {
    name: 'Beautiful Soup',
    group: skillGroup.WEB_SCRAPING,
    years: 2,
    logo: imgBeautifulSoup.src,
    className: 'border-[#000000]',
  },
  {
    name: 'Puppeteer',
    group: skillGroup.AUTOMATION,
    years: 2,
    logo: imgPuppeteer.src,
    className: 'border-[#40B5A4]',
  },
]
