import { reviews } from '@/app/configs/reviews'
import { StarIcon } from '@heroicons/react/20/solid'

function HomeReviews() {
  return (
    <section id="home-reviews" className="bg-gradient-to-b from-primary-50 to-primary-100">
      <div className="pt-8 pb-16 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 2xl:px-16">
        <div className="mb-10 text-center">
          <h2 className="section-header">Client Testimonials</h2>
          <p className="section-sub-header">
            Client insights on our successful collaborations
          </p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
          {reviews.map(
            (review, index) =>
              review.published && (
                <div
                  key={index}
                  className="p-6 shadow rounded text-sm text-typo-500 bg-white"
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
              )
          )}
        </div>
      </div>
    </section>
  )
}

export default HomeReviews
