import Button from "../layout/Button";
import { HiArrowRight } from "react-icons/hi2";
import { images } from "../../assets/images";

function HeroSection() {
  return (
    <section
      className="relative isolate flex min-h-150 items-center overflow-hidden bg-ink pt-20 sm:min-h-170 md:min-h-185 md:pt-24 lg:min-h-205 xl:min-h-screen"
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

      <div className="page-shell flex w-full justify-center pt-16 sm:pt-20 lg:pt-24 xl:pt-28">
        <div className="w-full text-center">
          <h1
            id="hero-title"
            className="font-display text-4xl leading-[0.9] tracking-[-0.035em] text-white uppercase sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
          >
            Women-only small group PT
          </h1>
          <p className="mt-4 font-sans text-sm font-medium uppercase text-white sm:mt-5 tracking-[0.3em] md:text-base lg:text-lg xl:text-4xl">
            Coaching in Oxford
          </p>
          <Button
            href="#programmes"
            className="mt-8 min-h-12 px-5 text-sm font-bold tracking-wide sm:mt-10 sm:min-h-16 sm:px-8 sm:text-xl lg:min-h-20 lg:px-10 lg:text-2xl"
          >
            Get started{" "}
            <HiArrowRight aria-hidden="true" className="size-5 sm:size-7 lg:size-9" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
