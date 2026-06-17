import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        {/* We use the requested user image */}
        <img src="/home1.png" alt="Professional Archery Coaching at Deona Archery Academy in New Panvel" className="hero-img" loading="eager" />
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
            <span style={{ color: '#ffffff', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>AIM HIGH</span> <br />
            <span style={{ color: '#111111' }}>FOUNDATION.</span> <br />
            <span style={{ color: 'var(--color-accent-blue)' }}>DEONA</span> <br />
            <span style={{ color: 'var(--color-accent-red)' }}>ARCHERY</span> <br />
            <span style={{ color: 'var(--color-accent-yellow)' }}>ACADEMY.</span>
          </motion.h1>

          <motion.p
            style={{ color: '#111111', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', fontWeight: '500' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Located in New Panvel, Navi Mumbai and serving students from Panvel, Kharghar, Kamothe, Kalamboli, Thane, Raigad and surrounding areas.
          </motion.p>
          
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
