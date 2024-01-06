'use client'

import { useMemo, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { reviews as origReviews } from '@/app/configs/reviews'

const REVIEWS_LIMIT = 6

function HomeReviews() {
  const [limit, setLimit] = useState(REVIEWS_LIMIT)

  const limited = useMemo(() => limit === REVIEWS_LIMIT, [limit])

  const reviews = useMemo(() => {
    return origReviews.filter((review) => review.published).slice(0, limit)
  }, [limit])

  const toggleReviewsLimit = () => {
    setLimit(limited ? origReviews.length : REVIEWS_LIMIT)
  }

  return (
    <section
      id="home-reviews"
      className="bg-gradient-to-b from-gray-100 to-gray-50"
    >
      <div className="site-container pt-8 pb-16 md:pb-0">
        <div className="mb-10 text-center">
          <h2 className="section-header">Client Testimonials</h2>
          <p className="section-sub-header">
            Client insights on our successful collaborations
          </p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-6 shadow rounded-md lg:rounded-lg text-sm text-typo-500 bg-white"
            >
              <div className="flex items-center gap-x-2 mb-3">
                <div className="w-10 h-10 grid place-content-center rounded-full bg-primary text-white shrink-0">
                  {review.firstname[0]}
                  {review.lastname[0]}
                </div>
                <div>
                  <p className="text-typo-600">
                    {review.firstname} {review.lastname[0]}.
                  </p>
                  <div className="flex">
                    {Array.from(new Array(5)).map((_, index) => (
                      <StarIcon
                        key={index}
                        className="text-yellow-400"
                        height={14}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-navy-blue mb-3">
                {review.title}
              </h3>
              <blockquote>{review.message}</blockquote>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-16">
          <button className="btn btn-light" onClick={toggleReviewsLimit}>
            {limited ? 'Show More' : 'Show Less'}
          </button>
        </div>
      </div>
    </section>
  )
}

export default HomeReviews
