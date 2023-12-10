import SiteNavbar from '@/app/components/SiteNavbar'
import SiteHero from '@/app/components/SiteHero'

export default function Home() {
  return (
    <>
      <div className="bg-primary-950 text-white text-sm text-center p-4">
        🚧 This website is still a work in progress 🚧
        <br />
        Go to{' '}
        <a href="https://mesi.dev" className="underline">
          mesi.dev
        </a>{' '}
        to view my current website.
      </div>
      <main className="bg-slate-50 min-h-screen">
        <SiteNavbar />
        <SiteHero />
      </main>
    </>
  )
}
