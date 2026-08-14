import { useRef, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi2";
import { programmesContent } from "../../data/content";
import { images } from "../../assets/images";
import Button from "../layout/Button";

function Programmes() {
  const { heading, subtitle, cards } = programmesContent;
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const cardWidth = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const card = track.querySelector("article");
    return card ? card.offsetWidth + 24 : 0;
  };

  const scroll = (dir) => {
    const next = Math.max(0, Math.min(cards.length - 1, active + dir));
    setActive(next);
    const track = trackRef.current;
    if (track) track.scrollTo({ left: next * cardWidth(), behavior: "smooth" });
  };

  return (
    <section id="programmes" className="bg-ink py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-[calc(100%-2.5rem)] max-w-[1216px] sm:w-[calc(100%-5rem)]">
        <h2 className="display-heading text-6xl text-accent md:text-7xl xl:text-8xl tracking-[0.005rem] font-light">
          {heading}
        </h2>
        <p className="mt-4 text-white text-base lg:text-lg font-bold tracking-[0.008rem]">
          {subtitle}
        </p>

        <div
          ref={trackRef}
          className="mt-10 flex gap-6 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {cards.map((card) => (
            <article
              key={card.title}
              className="relative aspect-3/4 w-[42vw] md:h-120 max-w-130 min-w-65 shrink-0 overflow-hidden"
            >
              <img
                src={images[card.image]}
                alt={card.title}
                className="absolute inset-0 size-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 flex flex-col items-start gap-3">
                <div>
                  <h3 className="text-3xl font-bold uppercase leading-tighter tracking-tight text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 font-light text-white/80 text-[14px] md:text-[16px]">
                    {card.subtitle}
                  </p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-white px-5 py-2 text-sm md:text-md font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-black"
                >
                  Find out more{" "}
                  <HiArrowRight className="size-7" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex gap-1.5">
            {cards.map((_, i) => (
              <span
                key={i}
                className={`block h-0.5 transition-all duration-300 ${i === active ? "w-10 bg-accent" : "w-5 bg-white/30"}`}
              />
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => scroll(-1)}
              disabled={active === 0}
              aria-label="Previous programme"
              className="flex size-9 items-center justify-center text-white transition-opacity disabled:opacity-30 hover:text-accent"
            >
              <HiArrowLeft className="size-8" aria-hidden="true" />
            </button>
            <button
              onClick={() => scroll(1)}
              disabled={active === cards.length - 1}
              aria-label="Next programme"
              className="flex size-9 items-center justify-center text-white transition-opacity disabled:opacity-30 hover:text-accent"
            >
              <HiArrowRight className="size-8" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            href="#contact"
            variant="light"
            className="min-h-14 md:text-2xl font-bold uppercase tracking-tight sm:min-h-16 px-8 text-lg rounded-2xl"
          >
            Book a free call{" "}
            <FaPhoneAlt aria-hidden="true" className="size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Programmes;
