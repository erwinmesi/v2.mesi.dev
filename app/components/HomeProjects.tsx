'use client'

import { projects } from '@/app/configs/projects'
import { Fragment, useEffect, useState } from 'react'
import cn from 'classnames'
import Dot from '@/app/components/shared/Dot'
import SymbolCircle from '@/app/components/shared/SymbolCircle'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'

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
          <h2 className="section-header">Featured Projects</h2>
          <p className="section-sub-header">
            A collection of projects I was heavily involved in.
          </p>
        </div>
        {mounted && (
          <div className="flex flex-col gap-y-20">
            {projects.map(
              (project) =>
                project.show && (
                  <div
                    className="flex flex-col lg:flex-row gap-x-8 rounded-md lg:rounded-none overflow-hidden border lg:border-none shadow lg:shadow-none"
                    key={project.name}
                  >
                    <div className="w-full lg:w-5/12 xl:w-1/2 grid place-content-center">
                      <picture className="inline-block overflow-hidden">
                        <img
                          src={project.thumbnail}
                          alt={project.name}
                          className={cn(
                            'w-full lg:max-h-[360px] aspect-[9/5] lg:aspect-[7/5] object-cover object-top lg:border'
                          )}
                        />
                      </picture>
                    </div>
                    <div className="w-full lg:w-7/12 xl:w-1/2 flex flex-col justify-center">
                      <div className="border-t lg:border-t-0 lg:border-l-[3px] lg:border-primary-500 p-6 lg:pl-6 lg:py-0.5 bg-white lg:bg-transparent">
                        <span>
                          <a
                            href={project.url as string}
                            className={cn('inline-block', {
                              'hover:underline': project.url,
                            })}
                            target="_blank"
                          >
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy-blue inline-flex items-center gap-x-2">
                              {project.name}
                              {project.url && (
                                <ArrowTopRightOnSquareIcon height="18" />
                              )}
                            </h3>
                          </a>
                        </span>
                        <div className="mt-4 flex flex-col">
                          <small className="text-2xs text-typo-400">ROLE</small>
                          <p className="font-semibold text-typo-600">
                            {project.role}
                          </p>
                        </div>
                        <div className="mt-8">
                          <small className="text-2xs text-typo-400">RESPONSIBILITY</small>
                          <div
                            className="text-sm"
                            dangerouslySetInnerHTML={{
                              __html: project.responsibility,
                            }}
                          />
                          <ul className="flex flex-wrap mt-8 gap-2">
                            {project.technologies.map((technology, index) => (
                              <Fragment key={index}>
                                <li className="border border-primary-400 py-0.5 px-1 rounded text-xs text-primary-400 font-medium">
                                  {technology}
                                </li>
                              </Fragment>
                            ))}
                          </ul>
                        </div>
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
