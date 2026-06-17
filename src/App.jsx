import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ReactLenis } from 'lenis/react';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import GalleryPage from './pages/GalleryPage';
import Contact from './pages/Contact';
import Navbar from './components/navbar/Navbar';
import MobileBottomNav from './components/navbar/MobileBottomNav';

function App() {
  return (
    <HelmetProvider>
      <ReactLenis root>
        <Router>
          <div className="app-container">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/archery-programs" element={<Programs />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <MobileBottomNav />
          </div>
        </Router>
      </ReactLenis>
    </HelmetProvider>
  );
}

export default App;
