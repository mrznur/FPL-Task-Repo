import { images } from '../../assets/images'

const posts = [
  { img: 'ig1', isReel: false },
  { img: 'ig2', isReel: true },
  { img: 'ig3', isReel: false },
  { img: 'ig4', isReel: true },
  { img: 'ig5', isReel: false },
  { img: 'ig6', isReel: true },
]

function ReelIcon() {
  return (
    <img src={images.reelIcon} alt="" className="size-5 drop-shadow" aria-hidden="true" />
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-8 stroke-white fill-none stroke-[1.5]" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="5"/>
      <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
    </svg>
  )
}

function InstagramSection() {
  return (
    <section className="bg-black py-8 sm:py-16 lg:py-20" aria-label="Instagram feed">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-350 sm:w-[calc(100%-5rem)]">

        <div className="flex flex-col items-center">
          <InstagramIcon />
          <div className="mt-2 h-24 md:h-42 w-0.5 bg-white/70" aria-hidden="true" />
          <h2 className="display-heading tracking-[-0.05rem] mt-4 text-4xl text-white md:text-5xl lg:text-7xl scale-y-140">
            The latest on Instagram
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-1 sm:grid-cols-3 sm:gap-2 lg:gap-3">
          {posts.map((post, i) => (
            <a
              key={i}
              href="https://www.instagram.com/tuffcorefitness_ox"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-surface"
              aria-label={`View Instagram post ${i + 1}`}
            >
              <img
                src={images[post.img]}
                alt=""
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {post.isReel && (
                <div className="absolute right-2 top-2">
                  <ReelIcon />
                </div>
              )}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            </a>
          ))}
        </div>

        <div className="my-12 flex flex-col items-center gap-6 md:gap-10 md:my-18">
          <p className="display-heading text-2xl scale-y-140 tracking-[0.005rem] text-white md:text-5xl lg:text-7xl">
            @tuffcorefitness_ox
          </p>
          <a
            href="https://www.instagram.com/tuffcorefitness_ox"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-white/60 px-6 md:px-8 py-2.5 text-xs md:text-lg font-bold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-black"
          >
            Follow to see more
          </a>
        </div>

      </div>
    </section>
  )
}

export default InstagramSection
