import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, MapPin, Calendar } from 'lucide-react';
import './AnnualCompetition.css';

const AnnualCompetition = () => {
  return (
    <section className="annual-event section-padding bg-light">
      <div className="container">
        <div className="event-content">
          <motion.div 
            className="event-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="title-secondary">
              <span style={{ color: 'var(--color-accent-red)' }}>Annual</span> Archery <br/> Championship
            </h2>
            <p className="text-body" style={{ marginTop: '1.5rem', fontSize: '1.1rem' }}>
              Every year, Drona Archery Academy proudly organizes a massive state-level archery competition. 
              Held at the sprawling grounds of <strong>Karnala Sports Academy in New Panvel</strong>, 
              this highly anticipated event brings together a huge number of teams and talented archers from across the region to compete for glory.
            </p>
            
            <div className="event-stats">
              <div className="stat-item">
                <Users size={32} color="var(--color-accent-blue)" />
                <div className="stat-info">
                  <h4>Huge Participation</h4>
                  <p>Dozens of teams competing</p>
                </div>
              </div>
              <div className="stat-item">
                <MapPin size={32} color="var(--color-accent-red)" />
                <div className="stat-info">
                  <h4>Premium Venue</h4>
                  <p>Karnala Sports Academy, New Panvel</p>
                </div>
              </div>
              <div className="stat-item">
                <Calendar size={32} color="var(--color-accent-yellow)" />
                <div className="stat-info">
                  <h4>Annual Event</h4>
                  <p>Organized every single year</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="event-visual"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="event-card">
              <Trophy size={80} color="var(--color-gold)" style={{ margin: '0 auto 1.5rem auto', display: 'block' }} />
              <h3>The Ultimate Showdown</h3>
              <p>Test your skills against the best archers in the region.</p>
              <div className="event-accent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnnualCompetition;
