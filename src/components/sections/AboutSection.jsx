import { FaPhoneAlt } from "react-icons/fa";
import { aboutContent } from "../../data/content";
import { images } from "../../assets/images";
import Button from "../layout/Button";
import FeatureCard from "../cards/FeatureCard";

function AboutSection() {
  const { title, accentTitle, description, ctaLabel, cards } = aboutContent;

  return (
    <section
      id="about"
      className="bg-ink py-16 sm:py-24 lg:py-32 xl:py-36"
      aria-labelledby="about-title"
    >
      <div className="page-shell">
        <div className="grid gap-7 sm:gap-9 md:grid-cols-[minmax(230px,.72fr)_minmax(0,1.75fr)] md:items-center lg:gap-20 xl:gap-26 md:justify-items-center">
          <h2
            id="about-title"
            className="display-heading text-5xl font-normal tracking-[0.005em] text-accent sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            {title}
            <br />
            {accentTitle}
          </h2>
          <p className="max-w-[800px] text-sm font-bold leading-[1.65] tracking-[0.005em] text-white/95 sm:text-base sm:leading-[1.7] lg:pb-1 lg:text-[1.05rem]">
            {description}
          </p>
        </div>

        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-14 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-4 lg:gap-5 [&::-webkit-scrollbar]:hidden">
          {cards.map((card) => (
            <FeatureCard
              key={card.title}
              {...card}
              image={images[card.image]}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <Button
            href="#contact"
            variant="accent"
            className="rounded-md px-5 py-2 md:py-4 md:px-10 text-md md:text-xl font-bold min-h-14"
          >
            {ctaLabel} <FaPhoneAlt aria-hidden="true" className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
