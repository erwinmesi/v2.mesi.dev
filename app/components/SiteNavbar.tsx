import logo from '@/app/assets/images/mesidotdev_sm.webp'

export default function SiteNavbar() {
  return (
    <header>
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <ul className="flex text-sm font-medium">
          <li className="transition-all text-gray-700 hover:text-primary-550 px-4 sm:px-6 py-6 md:py-10 cursor-pointer shrink-0">
            <a href="/">
              <picture>
                <img
                  src={logo.src}
                  alt="mesi.dev logo"
                  className="w-10 h-10 rounded-lg"
                />
              </picture>
            </a>
          </li>
          <li className="transition-all text-gray-700 hover:text-primary-550 px-4 sm:px-6 py-6 md:py-10 cursor-pointer flex items-center">
            <a href="/#works">Works</a>
          </li>
          <li className="transition-all text-gray-700 hover:text-primary-550 px-4 sm:px-6 py-6 md:py-10 cursor-pointer flex items-center">
            <a href="/#cv">CV</a>
          </li>
        </ul>
        <div className="px-4 sm:px-6">
          <a href="/#contact">
            <button className="btn btn-primary">Contact Me</button>
          </a>
        </div>
      </nav>
    </header>
  )
}
