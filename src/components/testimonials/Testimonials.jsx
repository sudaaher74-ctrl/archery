import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'State Champion',
    quote: '"Drona Archery Academy transformed my technique and mindset. Truly world-class."',
    img: '/aboutus.png' // re-using image
  },
  {
    name: 'Marcus Chen',
    role: 'Olympic Hopeful',
    quote: '"The precision and focus taught here are unmatched anywhere else."',
    img: '/team.png'
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        <motion.div 
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="title-secondary">STUDENT <span className="title-gold">VOICES</span></h2>
        </motion.div>
        
        <div className="testimonials-grid">
          {testimonials.map((test, index) => (
            <motion.div 
              key={index} 
              className="testimonial-card glass"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="testimonial-video-bg">
                <img src={test.img} alt={test.name} />
                <div className="testimonial-overlay"></div>
                <div className="play-icon-wrapper title-gold">
                  <Play size={40} fill="currentColor" />
                </div>
              </div>
              <div className="testimonial-content">
                <p className="testimonial-quote">{test.quote}</p>
                <div className="testimonial-author">
                  <h4 className="author-name title-gold">{test.name}</h4>
                  <p className="author-role text-body">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
