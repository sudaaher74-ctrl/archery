import { motion } from 'framer-motion';
import './AchievementsSection.css';

const achievements = [
  { count: '12', title: 'National Titles', img: '/team.png', size: 'large' },
  { count: '45', title: 'State Medals', img: '', size: 'small' },
  { count: '08', title: 'Olympic Qualifiers', img: '/home.png', size: 'large' },
  { count: '150+', title: 'Tournament Wins', img: '', size: 'small' },
];

const AchievementsSection = () => {
  return (
    <section className="achievements-section section-padding">
      <div className="container">
        <motion.div 
          className="achievements-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="title-secondary">OUR <span className="title-gold">LEGACY</span></h2>
        </motion.div>
        
        <div className="achievements-gallery">
          {achievements.map((item, index) => (
            <motion.div 
              key={index} 
              className={`achievement-card ${item.size} ${item.img ? 'has-img' : 'glass'}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {item.img && <img src={item.img} alt={item.title} className="achievement-img" />}
              <div className="achievement-overlay"></div>
              <div className="achievement-content">
                <span className="achievement-count title-gold">{item.count}</span>
                <h3 className="achievement-title">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
