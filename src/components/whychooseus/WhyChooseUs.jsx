import { motion } from 'framer-motion';
import { Target, Shield, Zap, TrendingUp } from 'lucide-react';
import './WhyChooseUs.css';

const features = [
  {
    icon: <Target size={40} strokeWidth={1.5} />,
    title: 'Focus',
    desc: 'Master your mind, master your aim.'
  },
  {
    icon: <Shield size={40} strokeWidth={1.5} />,
    title: 'Discipline',
    desc: 'Consistency breeds excellence.'
  },
  {
    icon: <Zap size={40} strokeWidth={1.5} />,
    title: 'Confidence',
    desc: 'Trust your form, trust yourself.'
  },
  {
    icon: <TrendingUp size={40} strokeWidth={1.5} />,
    title: 'Performance',
    desc: 'Elevate beyond the competition.'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const WhyChooseUs = () => {
  return (
    <section className="why-section section-padding">
      <div className="container">
        <motion.div 
          className="why-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="title-secondary">WHY <span className="title-gold">ARCHERY</span></h2>
        </motion.div>
        
        <motion.div 
          className="why-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="why-card glass"
              variants={cardVariants}
              whileHover={{ y: -10, borderColor: "var(--color-gold)", boxShadow: "0 10px 30px rgba(212, 175, 55, 0.1)" }}
            >
              <div className="why-icon title-gold">{feature.icon}</div>
              <h3 className="why-title">{feature.title}</h3>
              <p className="why-desc text-body">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
