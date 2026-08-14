import { images } from "../../assets/images";

function MissionSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-2 md:mx-5">
        <img
          src={images.patternLight}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 md:h-full w-auto -translate-x-1/2 -translate-y-1/2"
        />

        <div className="flex items-center gap-0">
          <img
            src={images.missionLeft}
            alt="Women training at TUFFCORE gym"
            className="hidden h-72 basis-[28%] shrink-0 grow-0 object-cover object-center md:block lg:h-96"
          />

          <div className="min-w-0 flex flex-1 flex-col items-center px-6 text-center sm:px-10 lg:px-16">
            <h2 className="display-heading font-light text-5xl text-black lg:text-7xl scale-y-110">
              Our Mission
            </h2>
            <p className="mt-5 text-base font-light leading-relaxed text-black lg:max-w-md" style={{ color: "black", WebkitTextStroke: "0.5px black" }}>
              At TUFFCORE FITNESS, our mission is simple: to create a
              supportive, empowering space where women of all backgrounds can
              build lasting strength, confidence, and resilience. Through expert
              coaching, a strong community, and tailored programmes, we help
              women unlock their full potential both inside and outside the gym.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center border-2 border-black px-8 py-3 text-base font-bold uppercase text-black transition-colors hover:bg-black hover:text-white md:text-xl"
            >
              Start your journey
            </a>
          </div>

          <img
            src={images.missionRight}
            alt="TUFFCORE coach training a client"
            className="hidden h-72 basis-[28%] shrink-0 grow-0 object-cover object-center md:block lg:h-96"
          />
        </div>
      </div>
    </section>
  );
}

export default MissionSection;
