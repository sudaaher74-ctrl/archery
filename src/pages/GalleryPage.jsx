import React from 'react';
import SEO from '../components/seo/SEO';
import Gallery from '../components/gallery/Gallery';
import AchievementsSection from '../components/achievements/AchievementsSection';
import Footer from '../components/Footer';

const GalleryPage = () => {
  return (
    <>
      <SEO 
        title="Archery Gallery & Achievements | Deona Archery Academy"
        description="View the gallery and tournament achievements of our students at Deona Archery Academy in New Panvel, Navi Mumbai."
        url="https://deonaarcheryacademy.com/gallery"
      />
      <div style={{ paddingTop: '80px' }}>
        <Gallery />
        <AchievementsSection />
        <Footer />
      </div>
    </>
  );
};

export default GalleryPage;
