import { motion } from 'framer-motion';
import './MeetCoach.css';

const MeetCoach = () => {
  return (
    <section className="coach-section section-padding">
      <div className="container">
        <div className="coach-layout">
          <motion.div 
            className="coach-img-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <img src="/coach.png" alt="Head Coach" className="coach-img" />
          </motion.div>
          
          <div className="coach-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="title-secondary">MEET THE <span className="title-gold">COACH</span></h2>
              
              <div className="coach-credentials">
                <p className="credential-item">National Medalist</p>
                <p className="credential-item">Maharashtra Team Coach</p>
                <p className="credential-item">PAN INDIA NIS CERTIFIED Level 1 & 2</p>
                <p className="credential-item">Indian, Compound & Recurve</p>
                <p className="credential-item">12+ Years Experience</p>
              </div>
              
              <div className="coach-signature">
                Mukesh Gurdale
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetCoach;
