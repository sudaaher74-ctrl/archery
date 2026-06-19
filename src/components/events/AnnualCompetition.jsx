import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, MapPin, Calendar } from 'lucide-react';
import './AnnualCompetition.css';

const AnnualCompetition = () => {
  return (
    <section className="annual-event section-padding">
      <div className="container">
        <div className="event-banner">
          <div className="event-glow"></div>
          <motion.div 
            className="event-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Trophy size={60} color="var(--color-gold)" className="event-icon" />
            <h2 className="title-secondary text-white">
              DRONA <span style={{ color: 'var(--color-accent-red)' }}>CUP</span>
            </h2>
            <p className="text-body text-light" style={{ maxWidth: '800px', margin: '1rem auto 1rem' }}>
              For the past 5 years, DRONA CUP has been one of Maharashtra's most exciting annual archery championships, organized by Drona Archery Academy. Every year, the event welcomes 300+ archers from across the state, competing in Indian Round, Recurve, and Compound categories.
            </p>
            <p className="text-body text-light" style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
              With divisions ranging from U10 to Open, DRONA CUP provides a professional platform for athletes of all ages to showcase their talent, gain competitive experience, and strive for excellence.
            </p>
            <h4 style={{ color: 'var(--color-gold)', marginBottom: '2rem', letterSpacing: '1px' }}>
              5 Years • 300+ Participants • U10 to Open • Archers from Across Maharashtra 🏹🏆
            </h4>
          </motion.div>
          
          <motion.div 
            className="event-cards-row"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card">
              <Users size={32} color="var(--color-accent-blue)" />
              <h4>300+ Archers</h4>
              <p>Participants from across Maharashtra</p>
            </div>
            <div className="glass-card">
              <Trophy size={32} color="var(--color-accent-red)" />
              <h4>Categories</h4>
              <p>Indian Round, Recurve & Compound</p>
            </div>
            <div className="glass-card">
              <Calendar size={32} color="var(--color-accent-yellow)" />
              <h4>5 Years</h4>
              <p>Annual championship legacy</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnnualCompetition;
