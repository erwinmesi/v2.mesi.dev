import {
  EnvelopeIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/20/solid'
import IconLinkedIn from '@/app/components/icons/IconLinkedIn'
import IconUpwork from '@/app/components/icons/IconUpwork'
import SymbolCircle from './shared/SymbolCircle'

function SiteContactBanner() {
  return (
    <section id="contact" className="md:px-16 md:py-16 bg-gray-50">
      <div className="py-24 bg-primary md:rounded-2xl relative overflow-hidden">
        <SymbolCircle svgClass="hidden md:block bg-primary-600 w-[100%] -left-[66%] -top-1/2" />
        <SymbolCircle svgClass="bg-primary-300 border-4 border-primary-300 w-[75%] right-[-25%] bottom-0" />
        <div className="site-container relative z-[1]">
          <div className="text-center">
            <h2 className="section-header !text-gray-50">{'Get In Touch'}</h2>
            <p className="my-2 md:text-lg text-gray-50">
              {"Contact me and let's work on completing your project."}
            </p>
          </div>
          <div className="mt-10 flex flex-col lg:flex-row items-center justify-center gap-6">
            <a className="btn btn-light" href="mailto:mesiaserwin@gmail.com">
              <EnvelopeIcon className="h-8" />
              <span className="font-semibold">mesiaserwin@gmail.com</span>
            </a>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                className="btn btn-light"
                href="https://www.upwork.com/fl/erwinmesi"
                target="_blank"
              >
                <IconUpwork
                  className="h-8 relative top-0.5"
                  title="Contact me on Upwork"
                />
                <span className="font-semibold inline-flex gap-2 items-center">
                  Upwork
                  <ArrowTopRightOnSquareIcon height="18" />
                </span>
              </a>
              <a
                className="btn btn-light"
                href="https://www.linkedin.com/in/erwinmesi"
                target="_blank"
              >
                <IconLinkedIn
                  className="h-8 relative bottom-0.5"
                  title="Connect with me on LinkedIn"
                />
                <span className="font-semibold inline-flex gap-2 items-center">
                  LinkedIn
                  <ArrowTopRightOnSquareIcon height="18" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SiteContactBanner
