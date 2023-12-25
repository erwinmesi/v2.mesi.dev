import IconLinkedIn from '@/app/components/icons/IconLinkedIn'
import IconUpwork from '@/app/components/icons/IconUpwork'

function SiteFooter() {
  return (
    <div className="bg-gray-900 text-center text-white">
      <div className="site-container py-6">
        <div className="flex justify-between items-start">
          <p className="text-sm">Erwin Mesias | mesi.dev</p>
          <div className="flex gap-5 items-center">
            <a href="https://www.upwork.com/fl/erwinmesi" target="_blank" className='relative top-0.5'>
              <IconUpwork className="h-5" />
            </a>
            <a href="https://www.linkedin.com/in/erwinmesi" target="_blank">
              <IconLinkedIn className="h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SiteFooter
