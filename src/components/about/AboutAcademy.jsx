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
      <div className="about-image-wrapper">
        <motion.img 
          src="/aboutus.png" 
          alt="About Academy" 
          className="about-img"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
        <div className="about-gradient"></div>
      </div>
      
      <div className="about-content">
        <motion.div 
          className="about-stats-container glass"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="stat-item">
            <h3 className="stat-number title-gold"><Counter to={500} /></h3>
            <p className="stat-label">Students</p>
          </div>
          
          <div className="stat-divider"></div>
          
          <div className="stat-item">
            <h3 className="stat-number title-gold"><Counter to={50} /></h3>
            <p className="stat-label">Medals</p>
          </div>
          
          <div className="stat-divider"></div>
          
          <div className="stat-item">
            <h3 className="stat-number title-gold"><Counter to={10} /></h3>
            <p className="stat-label">Years Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutAcademy;
