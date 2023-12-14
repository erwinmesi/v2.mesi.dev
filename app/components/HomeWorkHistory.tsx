import WorkHistoryCard from '@/app/components/WorkHistoryCard'
import WorkHistoryLine from '@/app/components/WorkHistoryLine'

function HomeWorkHistory() {
  return (
    <section id="home-work-history">
      <div className="site-container">
        <div className="text-center">
          <h2 className="section-header">Employment History</h2>
          <p className="section-sub-header">
            A timeline of my professional journey and milestones
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-10">
          <WorkHistoryCard />
          <WorkHistoryLine />
          <WorkHistoryCard />
          <WorkHistoryLine />
          <WorkHistoryCard />
        </div>
      </div>
    </section>
  )
}

export default HomeWorkHistory
