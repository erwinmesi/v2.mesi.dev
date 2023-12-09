export default function SiteNavbar() {
  return (
    <header className="relative z-[3]">
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <ul className="flex text-sm font-medium">
          <li className="transition-all text-gray-700 hover:text-primary-550 px-6 py-10 cursor-pointer">
            Home
          </li>
          <li className="transition-all text-gray-700 hover:text-primary-550 px-6 py-10 cursor-pointer">
            Services
          </li>
          <li className="transition-all text-gray-700 hover:text-primary-550 px-6 py-10 cursor-pointer">
            Works
          </li>
        </ul>
        <button className="btn btn-primary">Contact Me</button>
      </nav>
    </header>
  )
}
