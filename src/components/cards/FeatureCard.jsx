function FeatureCard({ image, alt, title }) {
  return (
    <article className="relative aspect-[.64] w-[78vw] max-w-[280px] shrink-0 snap-start overflow-hidden rounded-sm bg-surface sm:w-auto sm:max-w-none sm:min-w-0 sm:shrink">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 size-full object-cover"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/90 via-black/35 to-transparent"
        aria-hidden="true"
      />
      <h3 className="absolute inset-x-4 bottom-4 max-w-[11rem] text-lg font-black uppercase leading-[0.98] tracking-tight text-white md:inset-x-5 md:bottom-5 md:text-xl">
        {title}
      </h3>
    </article>
  );
}

export default FeatureCard;
