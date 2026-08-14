import { useState, useEffect } from 'react'
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi2'
import { reviewsContent } from '../../data/content'

function StarRating() {
  return (
    <div className="flex gap-1 [&>span]:hidden" aria-label="Five out of five stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <HiStar key={`icon-${i}`} aria-hidden="true" className="size-[18px] text-accent" />
      ))}
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-accent text-lg leading-none">★</span>
      ))}
    </div>
  )
}

function QuoteIcon() {
  return (
    <svg viewBox="0 0 40 30" className="h-8 w-10 fill-accent opacity-90" aria-hidden="true">
      <path d="M0 30V18.5Q0 11 4 6T16 0l2 3.5Q12 5 9.5 8.5T7 18h7V30H0zm22 0V18.5Q22 11 26 6T38 0l2 3.5Q34 5 31.5 8.5T29 18h7V30H22z"/>
    </svg>
  )
}

function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false)
  const words = review.text.split(' ')
  const limit = 25
  const isLong = words.length > limit
  const displayText = isLong && !expanded ? words.slice(0, limit).join(' ') + '...' : review.text

  return (
    <article className="flex h-76 md:h-90 lg:h-100 flex-col rounded border border-white/15 bg-surface p-6 sm:p-7">
      <StarRating />

      <div className={`mt-4 min-h-0 flex-1 ${expanded ? 'overflow-y-auto' : 'overflow-hidden'}`}>
        <p className="text-sm font-light leading-relaxed text-white/90 sm:text-base">
          {displayText}
        </p>
        {isLong && (
          <button
            onClick={() => setExpanded(e => !e)}
            className="mt-1 block text-accent text-xs font-bold uppercase tracking-wide hover:underline focus:outline-none"
          >
            {expanded ? 'Read less' : 'Read more'}
          </button>
        )}
      </div>

      <div className="mt-4 shrink-0">
        <p className="text-sm font-black uppercase tracking-wide text-white">{review.name}</p>
        <p className="mt-0.5 text-xs font-light text-white/50">{review.location}</p>
      </div>

      <div className="mt-4 shrink-0 flex justify-center">
        <QuoteIcon />
      </div>
    </article>
  )
}

function ReviewsSection() {
  const { eyebrow, heading, reviews } = reviewsContent
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(2)

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setVisible(3)
      else if (window.innerWidth >= 640) setVisible(2)
      else setVisible(1)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const total = reviews.length

  const prev = () => setActive(a => (a - 1 + total) % total)
  const next = () => setActive(a => (a + 1) % total)

  const visibleReviews = Array.from({ length: visible }, (_, i) => reviews[(active + i) % total])

  return (
    <section id="reviews" className="bg-ink py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1216px] sm:w-[calc(100%-5rem)]">
        <div className="mb-10 text-center sm:mb-12 lg:mb-14">
          <p className="text-sm md:text-md font-bold uppercase tracking-[0.015em] text-white scale-y-120">
            {eyebrow}
          </p>
          <h2 className="display-heading font-light scale-y-115 tracking-[0.05rem] mt-5 text-4xl text-white md:text-5xl lg:text-6xl">
            {heading}
          </h2>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
          <button
            onClick={prev}
            aria-label="Previous reviews"
            className="shrink-0 text-white transition-colors hover:text-accent"
          >
            <HiChevronLeft className="size-7 sm:size-8 lg:size-10" aria-hidden="true" />
          </button>

          <div className="grid min-w-0 flex-1 grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {visibleReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next reviews"
            className="shrink-0 text-white transition-colors hover:text-accent"
          >
            <HiChevronRight className="size-7 sm:size-8 lg:size-10" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-10 flex justify-center gap-2 sm:mt-12">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-0.5 transition-all duration-300 ${i === active ? 'w-10 bg-accent' : 'w-5 bg-white/25'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
