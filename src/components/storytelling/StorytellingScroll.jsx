import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, IndianRupee, Users, CalendarCheck, ShieldCheck } from 'lucide-react';
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
          end: '+=2500',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        }
      });

      // Phase 1: Archer and Hero Text appear
      tl.fromTo('.st-archer', { x: '-50vw', opacity: 0 }, { x: '0', opacity: 1, duration: 1 })
        .fromTo('.st-block-1', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, '<');

      // Phase 2: Arrow flies, Hero Text fades
      tl.to('.st-block-1', { opacity: 0, y: -20, duration: 0.8 })
        .to('.st-archer', { x: '-50vw', opacity: 0, duration: 1 }, '<')
        .fromTo('.st-arrow-1', { x: '-50vw', opacity: 1 }, { x: '50vw', opacity: 1, duration: 1.5, ease: 'power1.inOut' }, '<');

      // Phase 3: Target zooms in, Arrow 2 hits Target
      tl.fromTo('.st-target', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 }, '<+0.5')
        .fromTo('.st-arrow-2', { x: '-50vw', opacity: 1 }, { x: '-70px', opacity: 1, duration: 0.5 })
        .to('.st-target', { scale: 1.1, duration: 0.1, yoyo: true, repeat: 1 })
        .to('.st-bullseye-ring', { scale: 2, opacity: 0, duration: 0.5 }, '<');

      // Phase 4: Block 2 (Benefits Grid) fades in
      tl.fromTo('.st-block-2', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, '+=0.2')
        .fromTo('.st-benefit-card', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1 }, '<+0.2');

      // Phase 5: Block 2 fades out, Block 3 (Booking CTA) fades in
      tl.to('.st-block-2', { opacity: 0, y: -50, duration: 1 }, '+=1')
        .fromTo('.st-block-3', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, '<');

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="st-container" ref={containerRef}>
      <div className="st-pinned-wrapper">
        
        {/* Left Side: Visuals */}
        <div className="st-left">
          <div className="st-asset st-archer">
            <ArcherSVG />
          </div>
          <div className="st-asset st-arrow-1">
            <ArrowSVG />
          </div>
          
          <div className="st-target-wrapper">
            <div className="st-asset st-target">
              <TargetSVG />
            </div>
            <div className="st-asset st-arrow-2">
              <ArrowSVG />
            </div>
            <div className="st-bullseye-ring"></div>
          </div>
        </div>

        {/* Right Side: Information */}
        <div className="st-right">
          
          {/* Block 1: Intro */}
          <div className="st-text-block st-block-1">
            <div className="st-badge">Open To All</div>
            <h1 className="st-title-hero"><span className="title-gold">TRY ARCHERY</span><br />FUN SESSIONS</h1>
            <p className="st-subtitle-hero">
              Looking for a unique and exciting activity? Experience archery with our 45-Minute Fun Archery Sessions. 
              Whether you're coming with friends, family, colleagues, or celebrating a special occasion, our sessions are designed for everyone to enjoy.
            </p>
          </div>

          {/* Block 2: Benefits Grid */}
          <div className="st-text-block st-block-2">
            <div className="st-benefits-grid">
              <div className="st-benefit-card">
                <Clock size={28} />
                <span>45-Minute Session</span>
              </div>
              <div className="st-benefit-card">
                <IndianRupee size={28} />
                <span>₹350 per person</span>
              </div>
              <div className="st-benefit-card">
                <ShieldCheck size={28} />
                <span>All equipment provided</span>
              </div>
              <div className="st-benefit-card">
                <Users size={28} />
                <span>Suitable for all ages</span>
              </div>
              <div className="st-benefit-card span-2">
                <CalendarCheck size={28} />
                <span>1 day advance booking</span>
              </div>
            </div>
          </div>

          {/* Block 3: Booking Info */}
          <div className="st-text-block st-block-3">
            <div className="st-booking">
              <p className="st-closing-text">
                No experience needed—just come, aim, and have fun! Discover the thrill of archery in a safe and exciting environment at Drona Archery Academy. ✨
              </p>
              <h4 className="st-motto">Aim • Shoot • Enjoy • Repeat 🎯</h4>
              <a href="https://wa.me/919699414848" target="_blank" rel="noreferrer" className="btn btn-primary st-book-btn">
                Book Your Session Now
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default StorytellingScroll;
