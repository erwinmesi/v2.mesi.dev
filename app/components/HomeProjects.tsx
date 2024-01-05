'use client'

import { projects } from '@/app/configs/projects'
import { Fragment, useEffect, useState } from 'react'
import cn from 'classnames'
import Dot from '@/app/components/shared/Dot'
import SymbolCircle from '@/app/components/shared/SymbolCircle'

function HomeProjects() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="home-projects"
      className="bg-gray-100 md:bg-white relative overflow-hidden"
    >
      <SymbolCircle svgClass="hidden md:block bg-gray-100 lg:bg-gray-50 !opacity-100 w-[175%] right-0 top-[200px] translate-x-1/2" />
      <div id="projects" className="site-container py-16 relative z-[1]">
        <div className="mb-10">
          <h2 className="section-header">Featured Works</h2>
          <p className="section-sub-header">
            A collection of projects I was heavily involved in.
          </p>
        </div>
        {mounted && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {projects.map(
              (project, index) =>
                project.show && (
                  <div
                    key={index}
                    className={cn(
                      'group shadow md:rounded overflow-hidden',
                      project.className
                    )}
                  >
                    <div className="flex flex-col justify-between h-full">
                      <div className="flex-1 overflow-hidden">
                        <picture className="block transition-all brightness-100 md:brightness-[0.9] md:group-hover:brightness-100 md:group-hover:scale-[1.1] w-full h-full duration-500">
                          <img
                            src={project.thumbnail}
                            alt={project.name}
                            className={cn(
                              'w-full object-cover object-top',
                              project.thumbnailClass
                            )}
                          />
                        </picture>
                      </div>
                      <div className="p-6 bg-white border-t">
                        {project.domain && (
                          <div>
                            <a
                              className="text-xs text-typo-500 hover:underline inline-block"
                              target="_blank"
                              href={project.url as string}
                            >
                              {project.domain}
                            </a>
                          </div>
                        )}
                        <a
                          href={project.url as string}
                          className={cn('inline-block', {
                            'hover:underline': project.url,
                          })}
                          target="_blank"
                        >
                          <h3 className="font-bold text-navy-blue">
                            {project.name}
                          </h3>
                        </a>
                        <p className="text-sm mt-1 font-semibold text-typo-700">
                          {project.role}
                        </p>
                        <div
                          className="text-sm py-3 text-typo-600"
                          dangerouslySetInnerHTML={{
                            __html: project.responsibility,
                          }}
                        />
                        <ul className="flex flex-wrap text-xs text-typo-500 mt-2">
                          {project.technologies.map((technology, index) => (
                            <Fragment key={index}>
                              <li>{technology}</li>
                              {index < project.technologies.length - 1 && (
                                <li>
                                  <Dot />
                                </li>
                              )}
                            </Fragment>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default HomeProjects
