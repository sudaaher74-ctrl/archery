import { motion } from 'framer-motion';
import './Gallery.css';

const galleryImages = [
  '/home.png',
  '/aboutus.png',
  '/team.png',
  '/coach.png',
  '/home.png',
  '/team.png'
];

const Gallery = () => {
  return (
    <section className="gallery-section section-padding">
      <div className="container">
        <motion.div 
          className="gallery-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="title-secondary">THE <span className="title-gold">GALLERY</span></h2>
        </motion.div>
        
        <div className="masonry-grid">
          {galleryImages.map((src, index) => (
            <motion.div 
              key={index} 
              className={`masonry-item item-${index}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
            >
              <img src={src} alt={`Gallery ${index}`} className="gallery-img" />
              <div className="gallery-overlay"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
