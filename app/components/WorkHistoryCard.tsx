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
      <div className="flex">
        <div className="relative flex flex-col text-center gap-y-2 pt-12 pb-5 px-5 shrink-0">
          <picture className="absolute left-1/2 -translate-x-1/2 -top-3 bg-primary rounded-full grid place-content-center shadow w-11 h-11">
            <img
              src={job.logo_url}
              alt="i-Cube Digital Solutions"
              className="w-7 h-7 object-contain"
            />
          </picture>
          <div>
            <p className="text-xs uppercase leading-tight">{job.from.month}</p>
            <strong className="text-sm">{job.from.year}</strong>
          </div>
          <div className="flex justify-center">
            <hr className="w-6 my-1" />
          </div>
          <div>
            {job.to.month && (
              <p className="text-xs uppercase leading-tight">{job.to.month}</p>
            )}
            <strong className="text-sm">{job.to.year}</strong>
          </div>
        </div>
        <div className="flex-1 border-l p-6 space-y-4">
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
              <p className="font-semibold text-typo-600">
                {job.company_name}
              </p>
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
