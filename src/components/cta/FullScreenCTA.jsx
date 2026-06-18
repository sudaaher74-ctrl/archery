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
          <button className="cta-enroll-btn">
            ENROLL NOW &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};

export default FullScreenCTA;
