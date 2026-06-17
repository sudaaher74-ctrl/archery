import { NavLink } from 'react-router-dom';
import { Home, Crosshair, Image as ImageIcon, PhoneCall, Info } from 'lucide-react';
import './MobileBottomNav.css';

const MobileBottomNav = () => {
  return (
    <nav className="mobile-bottom-nav">
      <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <Home size={24} />
        <span>Home</span>
      </NavLink>
      
      <NavLink to="/archery-programs" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <Crosshair size={24} />
        <span>Programs</span>
      </NavLink>

      <NavLink to="/gallery" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <ImageIcon size={24} />
        <span>Gallery</span>
      </NavLink>

      <NavLink to="/about" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <Info size={24} />
        <span>About</span>
      </NavLink>

      <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <PhoneCall size={24} />
        <span>Contact</span>
      </NavLink>
    </nav>
  );
};

export default MobileBottomNav;
