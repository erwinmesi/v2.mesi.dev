import { env } from '@/app/configs/site'
import HomeAbout from '@/app/components/HomeAbout'
import HomeHero from '@/app/components/HomeHero'
import HomeSkills from '@/app/components/HomeSkills'
import HomeWorkHistory from '@/app/components/HomeWorkHistory'
import HomeProjects from '@/app/components/HomeProjects'
import HomeReviews from '@/app/components/HomeReviews'
import SiteNavbar from '@/app/components/SiteNavbar'
import SiteWipNotice from '@/app/components/SiteWipNotice'

export default function Home() {
  return (
    <>
      {env !== 'development' && <SiteWipNotice />}
      <main className="min-h-screen overflow-hidden pb-[1000px]">
        <SiteNavbar />
        <HomeHero />
        <HomeAbout />
        <HomeSkills />
        <HomeProjects />
        <HomeReviews />
        <HomeWorkHistory />
      </main>
    </>
  )
}
