import Header from './components/layout/Header'
import HeroSection from './components/sections/HeroSection'
import TrustBanner from './components/sections/TrustBanner'
import AboutSection from './components/sections/AboutSection'

function App() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <Header />
      <main id="top">
        <HeroSection />
        <TrustBanner />
        <AboutSection />
      </main>
    </div>
  )
}

export default App
