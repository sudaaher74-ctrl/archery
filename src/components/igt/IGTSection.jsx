import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Trophy, Tv, Target, ChevronLeft, ChevronRight } from 'lucide-react';
import './IGTSection.css';

const IGTSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = ['/igt1.mp4', '/igt2.mp4'];

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section className="igt-section section-padding">
      <div className="container">
        <div className="igt-layout">
          {/* Left Side: Video */}
          <motion.div 
            className="igt-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <video 
              key={currentVideo}
              src={videos[currentVideo]} 
              autoPlay 
              loop 
              muted 
              playsInline
              className="igt-img" 
            />
            <div className="igt-img-overlay"></div>
            
            {videos.length > 1 && (
              <div className="video-controls" style={{ position: 'absolute', bottom: '20px', right: '20px', zIndex: 10, display: 'flex', gap: '10px' }}>
                <button 
                  onClick={prevVideo} 
                  style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff', transition: 'all 0.3s' }}
                  onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.4)'}
                  onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextVideo} 
                  style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff', transition: 'all 0.3s' }}
                  onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.4)'}
                  onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            )}
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IGTSection;
