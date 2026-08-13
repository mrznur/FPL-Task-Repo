import Button from "../layout/Button";
import { HiArrowRight } from "react-icons/hi2";
import { images } from "../../assets/images";

function HeroSection() {
  return (
    <section
      className="relative isolate flex min-h-[600px] items-center overflow-hidden bg-ink pt-20 sm:min-h-[680px] md:min-h-[740px] md:pt-24 lg:min-h-[820px] xl:min-h-screen"
      aria-labelledby="hero-title"
    >
      <img
        src={images.hero}
        alt="Members of the TUFFCORE women-only fitness community in their gym"
        className="absolute inset-0 -z-20 size-full object-cover object-[57%_center] sm:object-[54%_center] xl:object-center"
      />
      <div className="absolute inset-0 -z-10 bg-black/25" aria-hidden="true" />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-2/5 bg-linear-to-t from-black/45 to-transparent"
        aria-hidden="true"
      />

      <div className="page-shell flex w-full justify-center pt-16 sm:pt-24 lg:pt-28 xl:pt-32">
        <div className="max-w-[1500px] text-center">
          <h1
            id="hero-title"
            className="font-display text-5xl leading-[0.9] tracking-[-0.035em] text-white uppercase sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
          >
            Women-only small group PT
          </h1>
          <p className="mt-4 font-sans text-sm font-medium uppercase tracking-[0.16em] text-white sm:mt-6 sm:text-base sm:tracking-[0.24em] md:text-lg lg:text-xl xl:text-2xl">
            Coaching in Oxford
          </p>
          <Button
            href="#programmes"
            className="mt-8 min-h-14 px-6 text-base font-bold tracking-wide sm:mt-12 sm:min-h-[76px] sm:px-10 sm:text-2xl lg:min-h-[88px] lg:text-3xl"
          >
            Get started{" "}
            <HiArrowRight aria-hidden="true" className="size-7 sm:size-9" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
