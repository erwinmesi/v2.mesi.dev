import SiteNavbar from '@/app/components/SiteNavbar'
import HomeHero from '@/app/components/HomeHero'
import HomeAbout from '@/app/components/HomeAbout'
import SiteWipNotice from '@/app/components/SiteWipNotice'
import { env } from '@/app/configs/site'

export default function Home() {
  return (
    <>
      {env !== 'development' && <SiteWipNotice />}
      <main className="min-h-screen overflow-hidden pb-64">
        <SiteNavbar />
        <HomeHero />
        <HomeAbout />
      </main>
    </>
  )
}
