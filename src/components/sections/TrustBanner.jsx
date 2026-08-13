import { HiArrowRight, HiStar } from "react-icons/hi2";
import { FaStarHalfAlt } from "react-icons/fa";
import { images } from "../../assets/images";

function TrustBanner() {
  const members = [images.memberOne, images.memberTwo, images.memberThree];

  return (
    <section
      className="relative isolate overflow-hidden bg-accent"
      aria-label="Community trust and reviews"
    >
      <img
        src={images.patternDark}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[150%] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-50 sm:h-[130%]"
      />

      <div className="mx-auto w-full max-w-[1350px] flex flex-col justify-between gap-8 px-5 py-10 sm:flex-row sm:items-center sm:gap-8 sm:px-8 sm:py-11 lg:px-12 lg:py-14">
        <div className="text-black">
          <h2 className="text-3xl font-bold uppercase leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
            Trusted by
            <br />
            <span className="text-white">500+ women</span>
            <br />
            <span className="inline-flex items-center gap-2.5">
              in Oxford
              <span className="flex">
                {members.map((src, index) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="size-8 rounded-full border-2 border-accent object-cover sm:size-7"
                    style={{
                      marginLeft: index === 0 ? 0 : "-8px",
                      zIndex: 3 - index,
                    }}
                  />
                ))}
              </span>
            </span>
          </h2>
          <a
            href="#contact"
            className="mt-5 inline-flex min-h-9 items-center gap-3 border-2 border-black px-4 py-3 text-sm font-bold uppercase tracking-wide transition-colors hover:bg-white md:text-base"
          >
            Contact us
            <HiArrowRight aria-hidden="true" className="size-5" />
          </a>
        </div>

        <div className="shrink-0 text-black lg:mr-8 xl:mr-12">
          <p className="font-bold leading-none tracking-tight text-3xl lg:text-5xl">
            4.97/5
          </p>
          <div
            className="mt-2 flex gap-1 sm:justify-center"
            aria-label="Five out of five stars"
          >
            {Array.from({ length: 4 }, (_, i) => (
              <HiStar key={i} aria-hidden="true" className="size-4 sm:size-4" />
            ))}
            <FaStarHalfAlt aria-hidden="true" className="size-4 sm:size-4" />
          </div>
          <p className="mt-1.5 whitespace-nowrap text-md font-medium md:text-md">
            1.5k+ reviews{" "}
            <span
              className="ml-1 text-sm font-bold md:text-base"
              style={{ color: "white", WebkitTextStroke: "0.19px black" }}
            >
              Google
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default TrustBanner;
