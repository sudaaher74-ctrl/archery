import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        {/* We use the requested user image */}
        <img src="/home.png" alt="Professional Archer" className="hero-img" />
      </div>
      
      <div className="container hero-content">
        <div className="hero-text">
          <motion.h1 
            className="title-primary hero-title-small"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <span style={{ color: '#ffffff', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>MASTER</span> <br />
            <span style={{ color: '#111111' }}>PRECISION.</span> <br />
            <span style={{ color: 'var(--color-accent-blue)' }}>BUILD FOCUS.</span> <br />
            <span style={{ color: 'var(--color-accent-red)' }}>BECOME A</span> <br />
            <span style={{ color: 'var(--color-accent-yellow)' }}>CHAMPION.</span>
          </motion.h1>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          >
            <button className="btn btn-primary">Book Trial</button>
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
