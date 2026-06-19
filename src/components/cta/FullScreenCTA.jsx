import { motion } from 'framer-motion';
import './FullScreenCTA.css';

const FullScreenCTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-yellow-card">
          <div className="cta-text-content">
            <h2 className="cta-title">READY TO HIT YOUR TARGET?</h2>
            <p className="cta-desc">
              Join Drona Archery Academy today and start your journey towards greatness.
            </p>
          </div>
          <a href="https://wa.me/919699414848" target="_blank" rel="noreferrer" className="cta-enroll-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
            ENROLL NOW &rarr;
          </a>>
        </div>
      </div>
    </section>
  );
};

export default FullScreenCTA;
