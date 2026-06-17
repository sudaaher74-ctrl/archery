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
            <button className="btn btn-primary">Book Trial</button>
            <button className="btn btn-outline play-btn">
              <Play size={20} fill="currentColor" /> Watch Video
            </button>
          </motion.div>
        </div>
      </div>
      {/* Mobile Features Bar matching the reference image */}
      <div className="hero-mobile-features">
        <div className="feature-item">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          </div>
          <h4>EXPERT COACHES</h4>
          <p>Learn from certified & experienced archers</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M12 2C8 2 4 6 4 12s4 10 8 10"></path><path d="M12 12h8"></path><path d="M16 8l4 4-4 4"></path></svg>
          </div>
          <h4>PREMIUM EQUIPMENT</h4>
          <p>Train with world-class equipment for better performance</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
          </div>
          <h4>ALL LEVELS</h4>
          <p>Programs for beginners to advanced archers</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
