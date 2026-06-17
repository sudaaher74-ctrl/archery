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
              The Annual Archery <span style={{ color: 'var(--color-accent-red)' }}>Championship</span>
            </h2>
            <p className="text-body text-light" style={{ maxWidth: '800px', margin: '1rem auto 2rem' }}>
              Every year, Drona Archery Academy proudly organizes a massive state-level archery competition. 
              Held at the sprawling grounds of <strong>Karnala Sports Academy in New Panvel</strong>, 
              this highly anticipated event brings together talented archers from across the region to compete for glory.
            </p>
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
              <h4>Huge Participation</h4>
              <p>Dozens of regional teams</p>
            </div>
            <div className="glass-card">
              <MapPin size={32} color="var(--color-accent-red)" />
              <h4>Premium Venue</h4>
              <p>Karnala Sports Academy</p>
            </div>
            <div className="glass-card">
              <Calendar size={32} color="var(--color-accent-yellow)" />
              <h4>Annual Event</h4>
              <p>Organized every year</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnnualCompetition;
