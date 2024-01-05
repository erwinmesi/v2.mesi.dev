import WorkHistoryCard from '@/app/components/WorkHistoryCard'
import WorkHistoryLine from '@/app/components/WorkHistoryLine'
import { workHistory } from '@/app/configs/workHistory'
import { Fragment } from 'react'
import bg from '@/app/assets/images/bg.svg'
import imageWarp2 from '@/app/assets/images/warp-2.svg'

function HomeWorkHistory() {
  return (
    <section
      id="home-work-history"
      className="pt-16 bg-cover bg-center"
      style={{ backgroundImage: `url('${bg.src}')` }}
    >
      <div className="site-container pb-16">
        <div className="text-center">
          <h2 className="section-header">Employment History</h2>
          <p className="section-sub-header">
            A timeline of my professional journey and milestones
          </p>
        </div>
        <div className="max-w-3xl mx-auto mt-10">
          {workHistory.map((job, index) => (
            <Fragment key={index}>
              <WorkHistoryCard job={job} />
              {index < workHistory.length - 1 && <WorkHistoryLine />}
            </Fragment>
          ))}
        </div>
      </div>
      <picture className="relative z-[1] -bottom-1">
        <img src={imageWarp2.src} alt="Warp" className="w-full rotate-180" />
      </picture>
    </section>
  )
}

export default HomeWorkHistory
