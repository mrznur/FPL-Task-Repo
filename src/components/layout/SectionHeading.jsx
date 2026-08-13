function SectionHeading({ eyebrow, title, accent, align = 'left', className = '' }) {
  return (
    <div className={`${align === 'center' ? 'text-center' : ''} ${className}`}>
      {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em]">{eyebrow}</p>}
      <h2 className="display-heading text-4xl sm:text-5xl md:text-6xl">
        {title}{accent && <><br /><span className="text-accent">{accent}</span></>}
      </h2>
    </div>
  )
}

export default SectionHeading
