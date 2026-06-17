import React from 'react';
import SEO from '../components/seo/SEO';
import MeetCoach from '../components/coach/MeetCoach';
import AboutAcademy from '../components/about/AboutAcademy';
import WhyChooseUs from '../components/whychooseus/WhyChooseUs';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <SEO 
        title="About Us | Professional Archery Academy in Navi Mumbai"
        description="Learn more about Deona Archery Academy, our professional coaches, and our mission to provide the best archery classes in Panvel, Kamothe, and Kharghar."
        url="https://deonaarcheryacademy.com/about"
      />
      <div style={{ paddingTop: '80px' }}>
        <AboutAcademy />
        <MeetCoach />
        <WhyChooseUs />
        <Footer />
      </div>
    </>
  );
};

export default About;
