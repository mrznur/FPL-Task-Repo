import { useRef, useState } from 'react'
import { HiChevronLeft, HiChevronRight, HiPlay } from 'react-icons/hi2'
import { successStoriesContent } from '../../data/content'
import { images } from '../../assets/images'

const VIDEO_ID = 'Osd4DLpMNp4'

function VideoCard({ thumb, videoId }) {
  const [playing, setPlaying] = useState(false)
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-black">
      {playing ? (
        <iframe
          className="absolute inset-0 size-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0`}
          title="Success story video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          aria-label="Play success story video"
          className="group absolute inset-0 flex items-center justify-center"
          onClick={() => setPlaying(true)}
        >
          <img src={thumb} alt="" className="absolute inset-0 size-full object-cover brightness-75" />
          <div className="relative z-10">
            <span className="flex size-12 items-center justify-center rounded-sm bg-white/90 shadow-lg transition-transform duration-200 group-hover:scale-110 sm:size-14">
              <HiPlay aria-hidden="true" className="size-5 translate-x-0.5 text-black sm:size-6" />
            </span>
          </div>
        </button>
      )}
    </div>
  )
}

function SuccessStories() {
  const { heading, headingAccent, description, stories } = successStoriesContent
  const stripRef = useRef(null)
  const [active, setActive] = useState(0)

  const featured = [stories[active], stories[(active + 1) % stories.length]]

  const scrollTo = (i) => {
    setActive(i)
    const strip = stripRef.current
    if (!strip) return
    const thumb = strip.children[i]
    if (thumb) thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }

  const prev = () => scrollTo((active - 1 + stories.length) % stories.length)
  const next = () => scrollTo((active + 1) % stories.length)

  return (
    <section id="success-stories" className="bg-ink py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-350 sm:w-[calc(100%-5rem)]">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between sm:gap-10 lg:gap-18">
          <h2 className="display-heading shrink-0 text-5xl lg:text-6xl scale-y-115">
            <span className="block text-white font-light">{heading}</span>
            <span className="block text-accent font-light">{headingAccent}</span>
          </h2>
          <p className="max-w-md text-xs md:text-sm font-bold leading-relaxed text-white/80 sm:text-base sm:pt-1 lg:max-w-lg">
            {description}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:gap-5">
          {featured.map((story) => (
            <VideoCard
              key={story.id}
              thumb={images[story.thumb]}
              videoId={VIDEO_ID}
            />
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <button
            onClick={prev}
            aria-label="Previous stories"
            className="shrink-0 text-white transition-colors hover:text-accent"
          >
            <HiChevronLeft className="size-7 sm:size-8" aria-hidden="true" />
          </button>

          <div
            ref={stripRef}
            className="flex gap-2 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-3"
          >
            {stories.map((story, i) => (
              <button
                key={story.id}
                onClick={() => scrollTo(i)}
                aria-label={`View story ${i + 1}`}
                className={`relative aspect-video h-14 shrink-0 overflow-hidden transition-opacity sm:h-16 lg:h-20 ${i === active || i === (active + 1) % stories.length ? 'opacity-100 ring-2 ring-accent' : 'opacity-50 hover:opacity-75'}`}
              >
                <img src={images[story.thumb]} alt="" className="size-full object-cover" />
              </button>
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next stories"
            className="shrink-0 text-white transition-colors hover:text-accent"
          >
            <HiChevronRight className="size-7 sm:size-8" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg px-8 py-4 text-sm md:text-xl font-bold uppercase tracking-tighter text-black bg-white transition-colors hover:bg-accent hover:text-white"
          >
            View more success stories
          </a>
        </div>
      </div>
    </section>
  )
}

export default SuccessStories
