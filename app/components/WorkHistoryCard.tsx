import Dot from '@/app/components/shared/Dot'
import { Job } from '@/app/configs/workHistory'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'

type WorkHistoryCardProps = {
  job: Job
}

function WorkHistoryCard({ job }: WorkHistoryCardProps) {
  return (
    <div className="border border-gray-100 rounded-lg shadow-lg bg-white">
      <div className="flex flex-col sm:flex-row">
        <div className="relative flex flex-row sm:flex-col justify-end sm:justify-start text-center gap-y-2 py-[18px] sm:pt-12 sm:pb-5 px-5 shrink-0">
          <picture className="absolute left-12 sm:left-1/2 -translate-x-1/2 top-2 sm:-top-3 bg-primary rounded-full grid place-content-center shadow w-10 sm:w-11 h-10 sm:h-11">
            <img
              src={job.logo_url}
              alt="i-Cube Digital Solutions"
              className="w-6 sm:w-7 h-6 sm:h-7 object-contain"
            />
          </picture>
          <div className="flex sm:flex-col items-center gap-x-1.5">
            <p className="text-xs uppercase leading-tight">{job.from.month}</p>
            <strong className="text-sm">{job.from.year}</strong>
          </div>
          <div className="hidden sm:flex justify-center">
            <hr className="w-6 my-1" />
          </div>
          <div className="sm:hidden w-[1px] bg-gray-200 mx-3 h-5 self-center" />
          <div className="flex sm:flex-col items-center gap-x-1.5">
            {job.to.month && (
              <p className="text-xs uppercase leading-tight">{job.to.month}</p>
            )}
            <strong className="text-sm">{job.to.year}</strong>
          </div>
        </div>
        <div className="flex-1 border-t sm:border-t-0 sm:border-l pt-4 sm:pt-6 p-6 space-y-4">
          <div>
            <h3 className="text-pinion-blue font-extrabold text-lg md:text-xl mb-0.5">
              {job.position}
            </h3>
            {job.company_url ? (
              <a
                href={job.company_url}
                className="font-semibold text-typo-600 flex gap-x-2 items-center hover:underline"
              >
                {job.company_name}
                <ArrowTopRightOnSquareIcon height="16" />
              </a>
            ) : (
              <p className="font-semibold text-typo-600">{job.company_name}</p>
            )}
          </div>
          <div
            className="space-y-2 text-sm"
            dangerouslySetInnerHTML={{ __html: job.description }}
          />
          <ul className="flex flex-wrap text-xs text-typo-500">
            {job.technologies.map((technology, index) => (
              <Fragment key={index}>
                <li>{technology}</li>
                {index < job.technologies.length - 1 && (
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
}

export default WorkHistoryCard
