import React from 'react';
import SEO from '../components/seo/SEO';
import { localBusinessSchema, faqSchema } from '../data/schema';
import HeroSection from '../components/hero/HeroSection';
import InteractiveTarget from '../components/target/InteractiveTarget';
import WhyChooseUs from '../components/whychooseus/WhyChooseUs';
import AnnualCompetition from '../components/events/AnnualCompetition';
import MeetCoach from '../components/coach/MeetCoach';
import AboutAcademy from '../components/about/AboutAcademy';
import AchievementsSection from '../components/achievements/AchievementsSection';
import Gallery from '../components/gallery/Gallery';
import Testimonials from '../components/testimonials/Testimonials';
import FullScreenCTA from '../components/cta/FullScreenCTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <SEO 
        title="Best Archery Academy New Panvel | Archery Coaching Navi Mumbai"
        description="Deona Archery Academy in New Panvel, Navi Mumbai offers professional archery coaching, kids archery classes, beginner training, and Olympic recurve training."
        url="https://deonaarcheryacademy.com/"
        schema={[localBusinessSchema, faqSchema]}
      />
      <HeroSection />
      <InteractiveTarget />
      <WhyChooseUs />
      <AnnualCompetition />
      <MeetCoach />
      <AboutAcademy />
      <AchievementsSection />
      <Gallery />
      <Testimonials />
      <FullScreenCTA />
      <Footer />
    </>
  );
};

export default Home;
