import Header from './components/layout/Header'
import HeroSection from './components/sections/HeroSection'

function App() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <Header />
      <main id="top">
        <HeroSection />
      </main>
    </div>
  )
}

export default App
