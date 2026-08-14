import { HiArrowRight } from "react-icons/hi2";
import { images } from "../../assets/images";

function FreeTourBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-accent py-14 sm:py-16 lg:py-24">
      <img
        src={images.patternDark}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 -z-10 h-[110%] w-auto -translate-y-1/2 opacity-90"
      />
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1400px] sm:w-[calc(100%-5rem)]">
        <h2 className="font-black uppercase leading-none tracking-tight text-4xl text-black md:text-5xl lg:text-6xl">
          Experience Tuffcore
          <br />
          with a <span className="text-white">Free Tour</span>
        </h2>
        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-3 border-2 border-black bg-transparent px-6 py-3 text-sm md:text-lg font-bold uppercase tracking-wider text-black transition-colors hover:bg-black hover:text-white sm:mt-10 sm:px-8"
        >
          Free Tour <HiArrowRight className="size-6" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export default FreeTourBanner;
