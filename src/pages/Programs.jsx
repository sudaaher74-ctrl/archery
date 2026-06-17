import React from 'react';
import SEO from '../components/seo/SEO';
import InteractiveTarget from '../components/target/InteractiveTarget';
import AnnualCompetition from '../components/events/AnnualCompetition';
import Footer from '../components/Footer';

const Programs = () => {
  return (
    <>
      <SEO 
        title="Archery Training Programs | Kids & Olympic Recurve | New Panvel"
        description="Explore our archery classes including beginner archery coaching, kids archery classes, Olympic recurve training, and compound bow training."
        url="https://deonaarcheryacademy.com/archery-programs"
      />
      <div style={{ paddingTop: '80px' }}>
        <InteractiveTarget />
        <AnnualCompetition />
        <Footer />
      </div>
    </>
  );
};

export default Programs;
