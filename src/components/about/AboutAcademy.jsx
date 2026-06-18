import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import './AboutAcademy.css';

const Counter = ({ from = 0, to, duration = 2 }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}+</span>;
};

const AboutAcademy = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* Top Text Content */}
        <div className="about-header-content">
          <h5 className="section-subtitle">ABOUT US</h5>
          <h2 className="section-title">
            BUILDING CHAMPIONS<br/>
            <span className="title-gold">SINCE 2012</span>
          </h2>
          <p className="about-desc">
            At Drona Archery Academy, we have been nurturing archers since 2012, helping students transform passion into performance. Located within the expansive Karnala Sports Academy, Panvel, our academy offers one of the region's largest dedicated archery training ranges, providing a professional environment for beginners and competitive athletes alike.
          </p>
          <p className="about-desc">
            Under the guidance of experienced coaches, we focus on developing precision, discipline, confidence, mental strength, and sportsmanship. From grassroots training to national-level competition preparation, our mission is to create champions both on and off the field.
          </p>
          <p className="about-desc">
            Whether your goal is recreation, fitness, competition, or representing India, Drona Archery Academy provides the platform, coaching, and support to help you achieve it.
          </p>
          <button className="btn btn-outline about-btn">
            LEARN MORE &rarr;
          </button>
        </div>

        {/* Image and Floating Stats */}
        <div className="about-visuals">
          <div className="about-image-wrapper">
            <motion.img 
              src="/aboutus.png" 
              alt="About Academy" 
              className="about-img"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>
          
          <motion.div 
            className="about-stats-container"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="stat-item">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-yellow, #FFC107)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h3 className="stat-number">12+</h3>
              <p className="stat-label">YEARS OF EXCELLENCE</p>
            </div>
            
            <div className="stat-divider"></div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-yellow, #FFC107)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
              </div>
              <h3 className="stat-number"><Counter to={300} />+</h3>
              <p className="stat-label">ARCHERS TRAINED</p>
            </div>
            
            <div className="stat-divider"></div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-yellow, #FFC107)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h8"></path><path d="M12 17v4"></path><path d="M7 4h10"></path><path d="M6 4c-1.1 0-2 .9-2 2v2c0 2.8 2.2 5 5 5h1M18 4c1.1 0 2 .9 2 2v2c0 2.8-2.2 5-5 5h-1"></path><path d="M12 17c-2.8 0-5-2.2-5-5V4"></path></svg>
              </div>
              <h3 className="stat-number"><Counter to={100} />+</h3>
              <p className="stat-label">STATE & NATIONAL MEDALS</p>
            </div>

            <div className="stat-divider"></div>
            
            <div className="stat-item" style={{ flex: 1.5 }}>
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-yellow, #FFC107)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <h3 className="stat-number" style={{ fontSize: '1.2rem' }}>KARNALA SPORTS</h3>
              <p className="stat-label">PROFESSIONAL RANGE</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutAcademy;
