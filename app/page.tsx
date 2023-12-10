import SiteNavbar from '@/app/components/SiteNavbar'
import SiteHero from '@/app/components/SiteHero'
import SiteWipNotice from '@/app/components/SiteWipNotice'

export default function Home() {
  return (
    <>
      <SiteWipNotice />
      <main className="bg-slate-50 min-h-screen overflow-hidden">
        <SiteNavbar />
        <SiteHero />
      </main>
    </>
  )
}
