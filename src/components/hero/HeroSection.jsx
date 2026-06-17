import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        {/* We use the requested user image */}
        <img src="/home1.png" alt="Professional Archer" className="hero-img" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-text">
          <motion.h1 
            className="title-primary"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            MASTER <br />
            PRECISION. <br />
            <span className="title-gold">BUILD FOCUS.</span> <br />
            BECOME A <br />
            CHAMPION.
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
