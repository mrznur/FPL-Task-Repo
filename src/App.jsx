import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import TrustBanner from "./components/sections/TrustBanner";
import AboutSection from "./components/sections/AboutSection";
import VideoSection from "./components/sections/VideoSection";
import Programmes from "./components/sections/Programmes";
import MissionSection from "./components/sections/MissionSection";
import SuccessStories from "./components/sections/SuccessStories";
import ReviewsSection from "./components/sections/ReviewsSection";
import RunningClub from "./components/sections/RunningClub";
import InstagramSection from "./components/sections/InstagramSection";
import FreeTourBanner from "./components/sections/FreeTourBanner";

function App() {
  return (
    <div className="min-h-screen bg-ink text-white">
      <Header />
      <main id="top">
        <HeroSection />
        <TrustBanner />
        <AboutSection />
        <VideoSection />
        <Programmes />
        <MissionSection />
        <SuccessStories />
        <ReviewsSection />
        <RunningClub />
        <InstagramSection />
        <FreeTourBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
