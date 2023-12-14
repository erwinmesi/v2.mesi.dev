import image from '@/app/assets/images/mesi_half_body_2.webp'
import mesiImage from '@/app/assets/images/mesi.webp'
import SymbolBento from '@/app/components/shared/SymbolBento'
import SymbolCircle from '@/app/components/shared/SymbolCircle'

export default function HomeHero() {
  return (
    <section id="home-hero" className="md:pt-3 md:pb-10 xl:pb-16">
      <div className="site-container !px-0 md:!px-6">
        <div className="relative py-8 md:py-28 lg:py-24 xl:py-28">
          <div className="z-[1] absolute inset-0 bg-primary-450 md:rounded-[32px] overflow-hidden shadow-lg">
            <SymbolBento
              picClass="absolute bottom-0 left-0"
              imgClass="w-24 opacity-30"
            />
            <SymbolBento
              picClass="absolute top-8 right-24"
              imgClass="w-24 opacity-30"
            />
            <SymbolCircle svgClass="border-4 w-[200px] absolute left-[25%] top-0 -translate-y-1/2" />
            <SymbolCircle svgClass="border-4 w-[200px] absolute -right-[100px] top-[100px]" />
            <SymbolCircle svgClass="bg-primary-500 md:bg-primary-600 w-[350px] top-[60%] left-[50%] -translate-x-1/2 -translate-y-1/2" />
            <SymbolCircle svgClass="bg-primary-300 w-[350px] top-0 left-[65%] -translate-x-1/2 -translate-y-1/2" />
            <SymbolCircle svgClass="hidden md:inline-block bg-primary-650 w-[500px] bottom-[-100px] right-0 translate-x-1/3" />
          </div>
          <div className="z-[2] relative px-6 sm:px-8 md:px-12 py-4 flex flex-col justify-center h-full">
            <div className="space-y-4 xl:w-3/5 z-[1]">
              <div className="relative uppercase text-lg font-bold">
                <SymbolBento
                  picClass="absolute -top-16 -left-8"
                  imgClass="w-24 opacity-30"
                />
                <picture>
                  <img
                    src={mesiImage.src}
                    alt="Erwin Mesias"
                    className="relative z-[1] w-36 aspect-square mb-8 border-[3px] shadow rounded-full md:hidden"
                  />
                </picture>
                <p className="relative z-[1]">
                  {"I'm"}
                  <span className="ml-2 bg-white px-1 py-1 text-primary">
                    Erwin Mesias
                  </span>
                </p>
              </div>
              <h1 className="text-4xl lg:text-5xl font-black inline-flex flex-col sm:flex-row sm:items-center gap-x-3 gap-y-2">
                Full-Stack{' '}
                <span className="bg-white text-primary px-2 py-1 -ml-2 sm:ml-0">
                  Web Developer
                </span>
              </h1>
              <div className="py-6 space-y-4 text-base md:text-lg font-medium text-typo md:text-gray-50 lg:text-gray-700 lg:w-3/5 xl:w-full lg:pr-14 md:drop-shadow-sm-white">
                <p>
                  Full-Stack Web and Cross-Platform Mobile Developer with vast
                  experience in coding different Web Frameworks.
                </p>
                <p>I handle both ends of the development from the ground up.</p>
              </div>
              <div className="inline-block relative">
                <div className="flex gap-x-3 relative z-[1]">
                  <a href="/#projects">
                    <button className="btn btn-dark md:btn-lg">
                      View Projects
                    </button>
                  </a>
                  <a href="/erwin_mesias_cv.pdf" target="_blank" download>
                    <button className="btn btn-light md:btn-lg">
                      Download CV
                    </button>
                  </a>
                </div>
                <SymbolCircle svgClass="border-4 w-[100px] top-[50%] left-[50%] -translate-x-1/2" />
              </div>
            </div>
            <picture className="z-[0] hidden md:block w-1/2">
              <img
                className="h-[650px] md:h-[700px] xl:h-[750px] absolute object-contain top-1/2 -translate-y-1/2 md:right-[-50px] lg:right-[35px] xl:right-1/4 xl:translate-x-1/2"
                src={image.src}
                alt="Erwin Mesias"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}
