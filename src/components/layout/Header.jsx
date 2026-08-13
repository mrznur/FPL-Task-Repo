import { useState } from 'react'
import { IoChevronDown } from 'react-icons/io5'
import { navigationItems } from '../../data/content'
import { images } from '../../assets/images'
import Button from './Button'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="page-shell flex h-20 items-center justify-between gap-4 sm:gap-6 md:h-24 lg:h-28 xl:h-36">
        <a href="#top" aria-label="TUFFCORE Fitness home" onClick={closeMenu} className="flex shrink-0 items-center gap-3">
          <img src={images.headerMark} alt="" className="h-auto w-10 sm:w-12 md:w-14 xl:w-16" />
          <img src={images.headerLogoText} alt="TUFFCORE" className="h-auto w-20 sm:w-24 md:w-28 xl:w-36" />
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-4 xl:flex 2xl:gap-7">
          {navigationItems.map(({ label, href, hasDropdown }) => (
            <a key={label} href={href} className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-bold uppercase leading-none tracking-normal text-white transition-colors hover:text-accent lg:text-base">
              {label}
              {hasDropdown && <IoChevronDown aria-hidden="true" className="size-3.5 shrink-0" />}
            </a>
          ))}
        </nav>

        <div className="hidden xl:block"><Button href="#contact" className="min-h-10 px-5 text-sm font-bold">Contact us</Button></div>

        <button
          type="button"
          className="grid size-10 place-items-center text-white xl:hidden"
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
        <nav aria-label="Mobile navigation" className="absolute inset-x-0 top-full border-t border-white/15 bg-ink px-5 py-6 xl:hidden">
          <div className="page-shell flex flex-col items-stretch gap-1">
            {navigationItems.map(({ label, href }) => (
              <a key={label} href={href} onClick={closeMenu} className="border-b border-white/10 py-4 text-lg font-bold uppercase tracking-tight transition-colors hover:text-accent">{label}</a>
            ))}
            <Button href="#contact" onClick={closeMenu} className="mt-5 w-full font-bold">Contact us</Button>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
