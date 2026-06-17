import { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import HeroSection from './components/hero/HeroSection';
import AboutAcademy from './components/about/AboutAcademy';
import WhyChooseUs from './components/whychooseus/WhyChooseUs';
import InteractiveTarget from './components/target/InteractiveTarget';
import AchievementsSection from './components/achievements/AchievementsSection';
import MeetCoach from './components/coach/MeetCoach';
import Gallery from './components/gallery/Gallery';
import Testimonials from './components/testimonials/Testimonials';
import FullScreenCTA from './components/cta/FullScreenCTA';
import Footer from './components/Footer';

function App() {
  return (
    <ReactLenis root>
      <div className="app-container">
        <HeroSection />
        <AboutAcademy />
        <WhyChooseUs />
        <InteractiveTarget />
        <AchievementsSection />
        <MeetCoach />
        <Gallery />
        <Testimonials />
        <FullScreenCTA />
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
