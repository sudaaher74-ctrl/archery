import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Zap, Smile, HeartPulse } from 'lucide-react';
import './StorytellingScroll.css';

gsap.registerPlugin(ScrollTrigger);

const ArcherSVG = () => (
  <svg width="200" height="300" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M120 50 C 130 30, 150 30, 160 50" stroke="#a1a1aa" strokeWidth="4" strokeLinecap="round" />
    <path d="M140 40 L 140 280" stroke="#a1a1aa" strokeWidth="6" strokeLinecap="round" />
    <path d="M140 100 C 100 120, 100 200, 140 220" stroke="#fbbf24" strokeWidth="4" />
    <line x1="80" y1="160" x2="140" y2="160" stroke="#fff" strokeWidth="3" />
    <circle cx="140" cy="30" r="15" fill="#a1a1aa" />
    <path d="M120 70 L 80 160 L 120 250" stroke="#a1a1aa" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowSVG = () => (
  <svg width="150" height="20" viewBox="0 0 150 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="10" y1="10" x2="140" y2="10" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" />
    <path d="M130 2 L 145 10 L 130 18" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 2 L 25 10 L 10 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TargetSVG = () => (
  <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="120" cy="120" r="110" fill="#ffffff" />
    <circle cx="120" cy="120" r="85" fill="#000000" />
    <circle cx="120" cy="120" r="60" fill="#3b82f6" />
    <circle cx="120" cy="120" r="35" fill="#ef4444" />
    <circle cx="120" cy="120" r="15" fill="#fbbf24" />
  </svg>
);

const StorytellingScroll = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=4000',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      // Phase 1: Archer appears
      tl.fromTo('.st-archer', { x: '-50vw', opacity: 0 }, { x: '0', opacity: 1, duration: 1 })
        .fromTo('.st-title-hero', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, '<');

      // Phase 2: Arrow flies across screen
      tl.to('.st-title-hero', { opacity: 0, duration: 0.5 })
        .to('.st-archer', { x: '-50vw', opacity: 0, duration: 1 }, '<')
        .fromTo('.st-arrow-1', { x: '-50vw', opacity: 1 }, { x: '150vw', opacity: 1, duration: 1.5, ease: 'power1.inOut' });

      // Phase 3: Target zooms in + "Take Your First Shot"
      tl.fromTo('.st-target', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 })
        .fromTo('.st-title-shot', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, '<');

      // Phase 4: Bullseye Hit
      tl.to('.st-title-shot', { opacity: 0, duration: 0.5 })
        .fromTo('.st-arrow-2', { x: '-50vw', opacity: 1, y: 0 }, { x: '-70px', opacity: 1, y: 0, duration: 0.5 })
        .to('.st-target', { scale: 1.1, duration: 0.1, yoyo: true, repeat: 1 })
        .to('.st-bullseye-ring', { scale: 2, opacity: 0, duration: 0.5 }, '<');

      // Phase 5: Benefits appear
      tl.fromTo('.st-benefit-card', { opacity: 0, y: 30, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.2 }, '+=0.2');

      // Phase 6: Book Your Session
      tl.fromTo('.st-booking', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="st-container" ref={containerRef}>
      <div className="st-pinned-wrapper">
        
        <h1 className="st-title st-title-hero">Unleash Your Inner Archer</h1>
        <h1 className="st-title st-title-shot">Take Your First Shot</h1>
        
        <div className="st-asset st-archer">
          <ArcherSVG />
        </div>
        
        <div className="st-asset st-arrow-1">
          <ArrowSVG />
        </div>
        
        <div className="st-center-group">
          <div className="st-target-wrapper">
            <div className="st-asset st-target">
              <TargetSVG />
            </div>
            <div className="st-asset st-arrow-2">
              <ArrowSVG />
            </div>
            <div className="st-bullseye-ring"></div>
          </div>
          
          <div className="st-benefits">
            <div className="st-benefit-card pos-1">
              <Target size={32} />
              <span>Focus</span>
            </div>
            <div className="st-benefit-card pos-2">
              <Zap size={32} />
              <span>Confidence</span>
            </div>
            <div className="st-benefit-card pos-3">
              <Smile size={32} />
              <span>Fun</span>
            </div>
            <div className="st-benefit-card pos-4">
              <HeartPulse size={32} />
              <span>Fitness</span>
            </div>
          </div>
        </div>

        <div className="st-booking">
          <h2>Book Your Session</h2>
          <p>₹450 | 45 Minutes | All Ages</p>
          <a href="https://wa.me/919699414848" target="_blank" rel="noreferrer" className="btn btn-primary st-book-btn">Book Now</a>
        </div>

      </div>
    </div>
  );
};

export default StorytellingScroll;
