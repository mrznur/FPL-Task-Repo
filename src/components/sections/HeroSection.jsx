import Button from '../layout/Button'
import { images } from '../../assets/images'

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-10" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  )
}

function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[650px] items-center overflow-hidden bg-ink pt-20 sm:min-h-[720px] md:min-h-[780px] md:pt-24 lg:min-h-screen" aria-labelledby="hero-title">
      <img
        src={images.hero}
        alt="Members of the TUFFCORE women-only fitness community in their gym"
        className="absolute inset-0 -z-20 size-full object-cover object-[54%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-black/20" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/5 bg-linear-to-t from-black/45 to-transparent" aria-hidden="true" />

      <div className="page-shell flex w-full justify-center pt-20 sm:pt-28 lg:pt-32">
        <div className="max-w-[1400px] text-center">
          <h1 id="hero-title" className="font-display text-[clamp(2.8rem,6.1vw,7.15rem)] leading-[0.86] tracking-normal text-white uppercase">
            Women-only small group PT
          </h1>
          <p className="mt-5 font-sans text-[clamp(1rem,2.05vw,2.1rem)] font-medium uppercase tracking-[0.24em] text-white sm:mt-7">
            Coaching in Oxford
          </p>
          <Button href="#programmes" className="mt-10 min-h-[70px] px-9 text-xl sm:mt-14 sm:min-h-[88px] sm:px-11 sm:text-2xl tracking-wider">
            Get started <ArrowIcon />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
