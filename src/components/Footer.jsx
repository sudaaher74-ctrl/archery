import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="title-gold" style={{ fontSize: '2rem', letterSpacing: '4px' }}>DRONA</h2>
            <p className="text-body" style={{ marginTop: '1rem', maxWidth: '300px' }}>
              Building champions on and off the field since 2012.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-col">
              <h4>Contact</h4>
              <a href="mailto:dronaarchery@gmail.com">dronaarchery@gmail.com</a>
              <a href="tel:+919699414848">+91 9699414848</a>
            </div>
            
            <div className="footer-col">
              <h4>Location</h4>
              <p>Karnala Sports Academy</p>
              <p>Panvel 410206</p>
            </div>
            
            <div className="footer-col">
              <h4>Social</h4>
              <a href="https://instagram.com/dronaarchery" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://facebook.com/dronaarchery" target="_blank" rel="noreferrer">Facebook</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom border-top">
          <p className="text-body">&copy; {new Date().getFullYear()} Drona Archery Academy. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
