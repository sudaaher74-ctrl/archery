import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './TrainingPrograms.css';

const programs = [
  {
    title: 'Beginner',
    img: '/archery_program_1.png',
    level: '01'
  },
  {
    title: 'Intermediate',
    img: '/archery_program_2.png',
    level: '02'
  },
  {
    title: 'Advanced',
    img: '/archery_action.png',
    level: '03'
  },
  {
    title: 'Competition',
    img: '/archery_target.png',
    level: '04'
  }
];

const TrainingPrograms = () => {
  return (
    <section className="programs-section section-padding">
      <div className="container">
        <motion.div 
          className="programs-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="title-secondary">TRAINING <span className="title-gold">PROGRAMS</span></h2>
        </motion.div>
        
        <div className="programs-grid">
          {programs.map((prog, index) => (
            <motion.div 
              key={index}
              className="program-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="program-img-wrapper">
                <img src={prog.img} alt={prog.title} className="program-img" />
                <div className="program-overlay"></div>
              </div>
              <div className="program-content">
                <span className="program-level title-gold">{prog.level}</span>
                <h3 className="program-title">{prog.title}</h3>
                <div className="program-arrow">
                  <ArrowRight size={24} color="var(--color-gold)" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingPrograms;
