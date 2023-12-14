import WorkHistoryCard from '@/app/components/WorkHistoryCard'
import WorkHistoryLine from '@/app/components/WorkHistoryLine'
import { workHistory } from '@/app/configs/workHistory'
import { Fragment } from 'react'
import bg from '@/app/assets/images/bg.svg'

function HomeWorkHistory() {
  return (
    <section
      id="home-work-history"
      className="py-16 bg-cover bg-center"
      style={{ backgroundImage: `url('${bg.src}')` }}
    >
      <div className="site-container">
        <div className="text-center">
          <h2 className="section-header">Employment History</h2>
          <p className="section-sub-header">
            A timeline of my professional journey and milestones
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-10">
          {workHistory.map((job, index) => (
            <Fragment key={index}>
              <WorkHistoryCard job={job} />
              {index < workHistory.length - 1 && <WorkHistoryLine />}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeWorkHistory
