import { motion } from 'framer-motion';
import { Clock, IndianRupee, Users, CalendarCheck, ShieldCheck } from 'lucide-react';
import './FunSessions.css';

const FunSessions = () => {
  const features = [
    { icon: <Clock size={24} />, text: '45-Minute Session' },
    { icon: <IndianRupee size={24} />, text: '₹350 per person' },
    { icon: <ShieldCheck size={24} />, text: 'All equipment provided' },
    { icon: <Users size={24} />, text: 'Suitable for all ages' },
    { icon: <CalendarCheck size={24} />, text: '1 day advance booking' },
  ];

  return (
    <section className="fun-sessions-section section-padding">
      <div className="container">
        <motion.div 
          className="fs-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="fs-badge">Open To All</div>
          <h2 className="title-secondary text-white">
            <span className="title-gold">TRY ARCHERY</span> – FUN SESSIONS
          </h2>
          <p className="fs-subtitle">
            Looking for a unique and exciting activity? Experience archery with our 45-Minute Fun Archery Sessions. 
            Whether you're coming with friends, family, colleagues, or celebrating a special occasion, our sessions are designed for everyone to enjoy.
          </p>
        </motion.div>

        <div className="fs-content">
          <motion.div 
            className="fs-features"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <div key={index} className="fs-feature-card glass">
                <div className="fs-icon-wrapper">{feature.icon}</div>
                <span>{feature.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="fs-footer text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="fs-closing-text">
              No experience needed—just come, aim, and have fun! Discover the thrill of archery in a safe and exciting environment at Drona Archery Academy. ✨
            </p>
            <h4 className="fs-motto">Aim • Shoot • Enjoy • Repeat 🎯</h4>
            <a href="https://wa.me/919699414848" target="_blank" rel="noreferrer" className="btn btn-primary fs-cta" style={{ textDecoration: 'none' }}>
              Book Your Session Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FunSessions;
