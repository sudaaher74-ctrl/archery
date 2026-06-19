import React from 'react';
import SEO from '../components/seo/SEO';
import { localBusinessSchema, faqSchema } from '../data/schema';
import HeroSection from '../components/hero/HeroSection';
import MeetCoach from '../components/coach/MeetCoach';
import AboutAcademy from '../components/about/AboutAcademy';
import WhyChooseUs from '../components/whychooseus/WhyChooseUs';
import Gallery from '../components/gallery/Gallery';
import IGTSection from '../components/igt/IGTSection';
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
      <MeetCoach />
      <AboutAcademy />
      <WhyChooseUs />
      <IGTSection />
      <div className="mobile-hidden"><Gallery /></div>
      <div className="mobile-hidden"><Testimonials /></div>
      <div className="mobile-hidden"><FullScreenCTA /></div>
      <Footer />
    </>
  );
};

export default Home;
