import { useState } from 'react'
import { navigationItems } from '../../data/content'
import { images } from '../../assets/images'
import Button from './Button'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="page-shell flex h-20 items-center justify-between gap-6 md:h-28 lg:h-36">
        <a href="#top" aria-label="TUFFCORE Fitness home" onClick={closeMenu} className="flex shrink-0 items-center gap-3">
          <img src={images.headerMark} alt="" className="h-auto w-14 md:w-20" />
          <img src={images.headerLogoText} alt="TUFFCORE" className="h-auto w-24 md:w-35 lg:w-44" />
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navigationItems.map(({ label, href, hasDropdown }) => (
            <a key={label} href={href} className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-bold uppercase leading-none tracking-normal text-white transition-colors hover:text-accent lg:text-base">
              {label}
              {hasDropdown && (
                <svg aria-hidden="true" width="10" height="6" viewBox="0 0 10 6" fill="none" className="shrink-0 translate-y-px">
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block"><Button href="#contact" className="min-h-10 px-4 text-sm">Contact us</Button></div>

        <button
          type="button"
          className="grid size-10 place-items-center text-white lg:hidden"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="flex w-6 flex-col gap-1.5" aria-hidden="true">
            <span className={`h-0.5 w-full bg-current transition-transform ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-full bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-current transition-transform ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      {isMenuOpen && (
        <nav aria-label="Mobile navigation" className="absolute inset-x-0 top-full border-t border-white/15 bg-ink px-5 py-7 lg:hidden">
          <div className="page-shell flex flex-col items-stretch gap-1">
            {navigationItems.map(({ label, href }) => (
              <a key={label} href={href} onClick={closeMenu} className="border-b border-white/10 py-4 text-lg font-bold uppercase tracking-tight transition-colors hover:text-accent">{label}</a>
            ))}
            <Button href="#contact" onClick={closeMenu} className="mt-5 w-full">Contact us</Button>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
