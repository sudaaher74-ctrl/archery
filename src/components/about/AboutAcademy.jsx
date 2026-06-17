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
            <span className="title-gold">ON AND OFF THE RANGE</span>
          </h2>
          <p className="about-desc">
            At Archery Alpha, we believe archery is more than a sport—it's a way of life. Our mission is to help archers of all levels reach their full potential with precision training, discipline and focus.
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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-yellow, #FFC107)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <h3 className="stat-number"><Counter to={500} />+</h3>
              <p className="stat-label">HAPPY STUDENTS</p>
            </div>
            
            <div className="stat-divider"></div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-yellow, #FFC107)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
              </div>
              <h3 className="stat-number"><Counter to={95} />%</h3>
              <p className="stat-label">SUCCESS RATE</p>
            </div>
            
            <div className="stat-divider"></div>
            
            <div className="stat-item">
              <div className="stat-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-yellow, #FFC107)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h8"></path><path d="M12 17v4"></path><path d="M7 4h10"></path><path d="M6 4c-1.1 0-2 .9-2 2v2c0 2.8 2.2 5 5 5h1M18 4c1.1 0 2 .9 2 2v2c0 2.8-2.2 5-5 5h-1"></path><path d="M12 17c-2.8 0-5-2.2-5-5V4"></path></svg>
              </div>
              <h3 className="stat-number"><Counter to={50} />+</h3>
              <p className="stat-label">AWARDS WON</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutAcademy;
