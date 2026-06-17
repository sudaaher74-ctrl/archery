import { NavLink } from 'react-router-dom';
import { Home, Crosshair, Image as ImageIcon, PhoneCall, Info } from 'lucide-react';
import './MobileBottomNav.css';

const MobileBottomNav = () => {
  return (
    <nav className="mobile-bottom-nav">
      <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <div className="nav-icon-wrapper"><Home size={24} /></div>
        <span className="nav-label">Home</span>
      </NavLink>
      
      <NavLink to="/archery-programs" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <div className="nav-icon-wrapper"><Crosshair size={24} /></div>
        <span className="nav-label">Programs</span>
      </NavLink>

      <NavLink to="/gallery" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <div className="nav-icon-wrapper"><ImageIcon size={24} /></div>
        <span className="nav-label">Gallery</span>
      </NavLink>

      <NavLink to="/about" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <div className="nav-icon-wrapper"><Info size={24} /></div>
        <span className="nav-label">About</span>
      </NavLink>

      <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
        <div className="nav-icon-wrapper"><PhoneCall size={24} /></div>
        <span className="nav-label">Contact</span>
      </NavLink>
    </nav>
  );
};

export default MobileBottomNav;
