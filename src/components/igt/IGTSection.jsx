import { motion } from 'framer-motion';
import { Star, Trophy, Tv, Target } from 'lucide-react';
import './IGTSection.css';

const IGTSection = () => {
  return (
    <section className="igt-section section-padding">
      <div className="container">
        <div className="igt-layout">
          {/* Left Side: Image */}
          <motion.div 
            className="igt-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="/achivments4.png" 
              alt="India's Got Talent Season 11" 
              className="igt-img" 
            />
            <div className="igt-img-overlay"></div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            className="igt-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="igt-badge">
              <Star size={16} fill="currentColor" /> National Recognition
            </div>
            <h2 className="title-secondary igt-title">
              FEATURED ON <br />
              <span className="title-gold">INDIA'S GOT TALENT</span> SEASON 11
            </h2>
            <p className="text-body igt-desc">
              Drona Archery Academy proudly showcased our exceptional talent on national television. 
              Our students demonstrated unparalleled precision and discipline on India's Got Talent, 
              inspiring young athletes across the nation to pursue excellence in archery.
            </p>

            {/* Achievement Cards */}
            <div className="igt-cards-grid">
              <div className="igt-card glass">
                <Tv className="igt-card-icon" />
                <span>National Television Appearance</span>
              </div>
              <div className="igt-card glass">
                <Target className="igt-card-icon" />
                <span>Professional Coaching</span>
              </div>
              <div className="igt-card glass">
                <Trophy className="igt-card-icon" />
                <span>State & National Champions</span>
              </div>
              <div className="igt-card glass">
                <Star className="igt-card-icon" />
                <span>Performance-Based Training</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="igt-ctas">
              <a href="https://wa.me/919699414848" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                Join Academy
              </a>
              <a href="https://wa.me/919699414848" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ textDecoration: 'none' }}>
                Book Free Trial
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IGTSection;
