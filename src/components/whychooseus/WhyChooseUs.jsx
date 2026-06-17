import { motion } from 'framer-motion';
import { Target, Shield, Zap, TrendingUp } from 'lucide-react';
import './WhyChooseUs.css';

const features = [
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-yellow, #FFC107)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>,
    title: 'CERTIFIED COACHES'
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-yellow, #FFC107)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>,
    title: 'PREMIUM EQUIPMENT'
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-yellow, #FFC107)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
    title: 'TOP FACILITY IN PANVEL'
  },
  {
    icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-yellow, #FFC107)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
    title: 'SAFE & SUPPORTIVE ENVIRONMENT'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="container">
        <h2 className="why-main-title">WHY CHOOSE US?</h2>
        
        <div className="why-grid">
          {features.map((feature, index) => (
            <div key={index} className="why-item">
              <div className="why-icon-container">
                {feature.icon}
              </div>
              <h3 className="why-item-title">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
