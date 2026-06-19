import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        {/* We use the requested user image */}
        <img src="/home3.png" alt="Professional Archery Coaching at Drona Archery Academy in New Panvel" className="hero-img" loading="eager" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-text">
          <motion.h1 
            className="title-primary hero-title-small"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <span style={{ color: '#111111' }}>Aim high foundation</span> <br />
            <span style={{ color: '#111111' }}>Present's</span> <br />
            <span style={{ color: 'var(--color-accent-red)' }}>Drona archery</span> <br />
            <span style={{ color: '#111111' }}>Academy</span> <br />
            <span style={{ color: 'var(--color-accent-red)' }}>Panvel</span>
          </motion.h1>


          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          >
            <a href="https://wa.me/919699414848" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ textDecoration: 'none' }}>
              Join Us
            </a>
            <button className="btn btn-outline play-btn">
              <Play size={20} fill="currentColor" /> Watch Video
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
