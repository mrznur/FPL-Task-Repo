import { HiArrowRight } from 'react-icons/hi2'
import { images } from '../../assets/images'

function RunningClub() {
  return (
    <section className="relative isolate overflow-hidden bg-black py-14 sm:py-20 lg:py-24">
      <img
        src={images.athlete}
        alt=""
        aria-hidden="true"
        className="md:mr-16 pointer-events-none absolute inset-0 -z-20 size-full object-cover object-center grayscale brightness-50 sm:inset-y-0 sm:right-0 sm:left-auto sm:h-full sm:w-[48%] sm:object-left sm:brightness-75 lg:w-[50%]"
      />
      <div
        className="absolute inset-0 -z-10 bg-black/60 sm:hidden"
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 right-[24%] -z-10 w-[28%] bg-linear-to-r from-black to-transparent sm:block hidden lg:right-[26%]"
        aria-hidden="true"
      />

      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1216px] sm:w-[calc(100%-5rem)]">
        <div className="w-full ">
          <p className="text-base font-bold uppercase tracking-[0.2em] md:leading-12 text-white md:text-4xl">
            Oxford's women only
          </p>
          <h2 className="mt-1 font-black italic uppercase leading-none tracking-wide text-accent text-4xl md:text-6xl lg:text-7xl">
            Running Club
          </h2>
          <p className="mt-5 text-sm font-light leading-relaxed text-white/80 md:text-base">
            Join our FREE Women's Running Club and be part of an active, supportive community.
          </p>
          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-3 rounded-lg bg-white px-4 md:px-8 py-3 text-sm md:text-lg font-bold uppercase text-black transition-colors hover:bg-accent hover:text-white"
          >
            Join the club <HiArrowRight className="size-6" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default RunningClub
