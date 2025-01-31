import cn from 'classnames'
import image from '@/app/assets/images/mesi_warp.webp'
import FloatingStats from '@/app/components/shared/FloatingStats'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'

type HomeAboutProps = {
  className?: string
}

const HomeAbout = ({ className }: HomeAboutProps) => {
  return (
    <section
      id="home-about"
      className={(cn(className), 'bg-primary-50 relative z-[2] py-12 xl:py-16')}
    >
      <div className="site-container">
        <div className="flex flex-col-reverse lg:flex-row gap-y-12 gap-x-16">
          <div className="grid place-content-center shrink-0 lg:px-12">
            <picture className="relative -left-5 sm:left-[unset]">
              <img src={image.src} alt="Erwin Mesias" className="w-[350px]" />
              <FloatingStats
                data="60+"
                caption="Completed Projects"
                className="w-24 h-24 absolute top-1/2 -translate-y-[100px] right-[-50px]"
              />
              <FloatingStats
                data="30+"
                caption="Clients"
                className="w-20 h-20 absolute top-12"
              />
              <FloatingStats
                data="8 years"
                dataClass="!text-base"
                caption="Experience"
                className="w-24 h-24 absolute bottom-0 right-3/4 translate-x-1/2"
              />
            </picture>
          </div>
          <div className="flex flex-col justify-center flex-1">
            <div className="max-w-2xl mx-auto">
              <div className="mb-10">
                <p className="section-sub-header">Quick self introduction</p>
                <h2 className="section-header !text-primary">About Me</h2>
              </div>
              <div className="space-y-2 mb-6">
                <h3 className="font-bold text-lg">
                  Full-Stack Web Developer with 8 years of experience
                </h3>
                <p>
                  8 years of Full-Stack Web Development experience in coding{' '}
                  <span className="font-semibold text-primary-500">
                    JavaScript, PHP and Python
                  </span>{' '}
                  and web frameworks such as{' '}
                  <span className="font-semibold text-primary-500">
                    React.js, Next.js, Vue.js, Nuxt.js, Laravel, Django, Flask,
                    Strapi CMS.
                  </span>
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold">
                  {"Let's"} Build Something Great Together!
                </h3>
                <p>
                  Whether {"you're"} looking to build a website from scratch,
                  revamp an existing one, or need expert advice on web
                  development, {"I'm"} here to help. {"Let's"} connect and turn
                  your vision into a digital reality!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-10">
                <a href="https://www.upwork.com/fl/erwinmesi" target="_blank">
                  <button className="btn btn-primary">
                    Upwork Profile
                    <ArrowTopRightOnSquareIcon height="20" />
                  </button>
                </a>
                <a href="https://www.linkedin.com/in/erwinmesi" target="_blank">
                  <button className="btn btn-light">
                    LinkedIn Connect
                    <ArrowTopRightOnSquareIcon height="20" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeAbout
