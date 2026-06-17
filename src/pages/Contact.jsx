import React from 'react';
import SEO from '../components/seo/SEO';
import FullScreenCTA from '../components/cta/FullScreenCTA';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <SEO 
        title="Contact Us | Archery Classes in Panvel & Navi Mumbai"
        description="Contact Deona Archery Academy in New Panvel. Join our archery classes today! Serving Panvel, Kharghar, Kamothe, Kalamboli, and Navi Mumbai."
        url="https://deonaarcheryacademy.com/contact"
      />
      <div style={{ paddingTop: '80px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <FullScreenCTA />
        <Footer />
      </div>
    </>
  );
};

export default Contact;
