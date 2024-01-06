'use client'

import { projects } from '@/app/configs/projects'
import { Fragment, useCallback, useEffect, useState } from 'react'
import cn from 'classnames'
import Dot from '@/app/components/shared/Dot'
import SymbolCircle from '@/app/components/shared/SymbolCircle'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'

function HomeProjects() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isEven = useCallback((index: number) => index % 2 === 0, [])

  return (
    <section
      id="home-projects"
      className="bg-gray-100 md:bg-white relative overflow-hidden"
    >
      <SymbolCircle svgClass="hidden md:block bg-gray-100 lg:bg-gray-50 !opacity-100 w-[175%] right-0 top-[200px] translate-x-1/2" />
      <div
        id="projects"
        className="site-container !max-w-6xl py-16 relative z-[1]"
      >
        <div className="mb-10">
          <h2 className="section-header">Featured Projects</h2>
          <p className="section-sub-header">
            A collection of projects I was heavily involved in.
          </p>
        </div>
        {mounted && (
          <div className="flex flex-col gap-y-12 lg:gap-y-20">
            {projects
              .filter(({ show }) => show)
              .map((project, index) => (
                <div
                  className={cn(
                    'flex flex-col gap-x-8 md:rounded-md lg:rounded-none overflow-hidden border lg:border-none shadow lg:shadow-none',
                    isEven(index) ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  )}
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
                    <div
                      className={cn(
                        'border-t lg:border-t-0 lg:border-primary-250 p-6 lg:py-4 bg-white lg:bg-transparent',
                        isEven(index)
                          ? 'lg:border-r-2 lg:pr-8'
                          : 'lg:border-l-2 lg:pl-8'
                      )}
                    >
                      <span
                        className={cn(
                          'flex',
                          isEven(index) ? 'lg:justify-end' : 'lg:justify-start'
                        )}
                      >
                        <a
                          href={project.url as string}
                          className={cn('inline-block', {
                            'hover:underline': project.url,
                          })}
                          target="_blank"
                        >
                          <h3
                            className={cn(
                              'text-xl sm:text-2xl lg:text-3xl font-extrabold text-navy-blue inline-flex items-center gap-x-2',
                              isEven(index) ? 'lg:text-right' : 'lg:text-left'
                            )}
                          >
                            {project.name}
                            {project.url && (
                              <ArrowTopRightOnSquareIcon height="18" />
                            )}
                          </h3>
                        </a>
                      </span>
                      <div className="mt-4 flex flex-col">
                        <small
                          className={cn(
                            'text-2xs text-typo-400',
                            isEven(index) ? 'lg:text-right' : 'lg:text-left'
                          )}
                        >
                          ROLE
                        </small>
                        <p
                          className={cn(
                            'font-semibold text-typo-600',
                            isEven(index) ? 'lg:text-right' : 'lg:text-left'
                          )}
                        >
                          {project.role}
                        </p>
                      </div>
                      <div className="mt-8 flex flex-col">
                        <small
                          className={cn(
                            'text-2xs text-typo-400',
                            isEven(index) ? 'lg:text-right' : 'lg:text-left'
                          )}
                        >
                          RESPONSIBILITY
                        </small>
                        <div
                          className={cn(
                            'text-sm',
                            isEven(index) ? 'lg:text-right' : 'lg:text-left'
                          )}
                          dangerouslySetInnerHTML={{
                            __html: project.responsibility,
                          }}
                        />
                        <ul
                          className={cn(
                            'flex flex-wrap mt-8 gap-2',
                            isEven(index) ? 'lg:flex-row-reverse' : 'lg:flex-row'
                          )}
                        >
                          {project.technologies.map((technology, index) => (
                            <Fragment key={index}>
                              <li className="border border-primary-550 py-0.5 px-1 rounded text-xs text-primary-550 font-medium">
                                {technology}
                              </li>
                            </Fragment>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default HomeProjects
