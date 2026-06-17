import { motion } from 'framer-motion';
import './FullScreenCTA.css';

const FullScreenCTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-bg">
        <img src="/team.png" alt="Target" className="cta-img" />
        <div className="cta-overlay"></div>
      </div>
      
      <div className="container cta-container">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="title-primary cta-title">
            READY TO HIT <br /> YOUR FIRST <br /> <span className="title-gold">BULLSEYE?</span>
          </h2>
          
          <div className="cta-buttons">
            <button className="btn btn-primary">Book Trial</button>
            <button className="btn btn-outline">Contact Coach</button>
          </div>
        </motion.div>
        
        <motion.div 
          className="flying-arrow"
          initial={{ x: '-100vw', y: '50vh', rotate: 15 }}
          whileInView={{ x: '100vw', y: '-50vh', rotate: 15 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "linear" }}
        >
          {/* Simple CSS shape for the fast flying arrow effect */}
          <div className="fast-arrow"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default FullScreenCTA;
