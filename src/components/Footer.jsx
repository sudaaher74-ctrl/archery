import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2 className="title-gold" style={{ fontSize: '2rem', letterSpacing: '4px' }}>AURA</h2>
            <p className="text-body" style={{ marginTop: '1rem', maxWidth: '300px' }}>
              Precision. Focus. Excellence. The premier archery academy for champions.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="footer-col">
              <h4>Contact</h4>
              <a href="#">hello@auraarchery.com</a>
              <a href="#">+1 (555) 123-4567</a>
            </div>
            
            <div className="footer-col">
              <h4>Location</h4>
              <p>124 Precision Ave</p>
              <p>Los Angeles, CA 90015</p>
            </div>
            
            <div className="footer-col">
              <h4>Social</h4>
              <a href="#">Instagram</a>
              <a href="#">YouTube</a>
              <a href="#">WhatsApp</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom border-top">
          <p className="text-body">&copy; {new Date().getFullYear()} AURA Archery Academy. All rights reserved.</p>
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
