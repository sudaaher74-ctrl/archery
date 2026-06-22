import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ArcheryScrollAnimation.css';

gsap.registerPlugin(ScrollTrigger);

// --- SVG Assets (To be replaced with PNGs) ---

const TargetSVG = () => (
  <svg className="target-svg" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="48" fill="#fff" />
    <circle cx="50" cy="50" r="38" fill="#111" />
    <circle cx="50" cy="50" r="28" fill="#0072B5" />
    <circle cx="50" cy="50" r="18" fill="#E01A22" />
    <circle cx="50" cy="50" r="8" fill="#FFB800" />
  </svg>
);

const BowSVG = () => (
  <svg className="bow-svg" viewBox="0 0 100 400" preserveAspectRatio="none">
    {/* Abstract Bow Shape */}
    <path d="M 50 10 Q 10 200 50 390" fill="none" stroke="#333" strokeWidth="8" strokeLinecap="round" />
    <path d="M 50 10 L 50 390" fill="none" stroke="#fff" strokeWidth="2" opacity="0.8" id="bow-string" />
  </svg>
);

const ArrowSVG = () => (
  <svg className="arrow-svg" viewBox="0 0 400 20">
    <rect x="20" y="8" width="360" height="4" fill="#8B4513" />
    {/* Fletching */}
    <polygon points="20,8 0,0 20,10" fill="#E01A22" />
    <polygon points="20,12 0,20 20,10" fill="#E01A22" />
    {/* Tip */}
    <polygon points="380,6 400,10 380,14" fill="#silver" />
  </svg>
);

const ArcheryScrollAnimation = () => {
  const containerRef = useRef(null);
  const targetRef = useRef(null);
  const archerRef = useRef(null);
  const bowRef = useRef(null);
  const arrowRef = useRef(null);
  const titleRef = useRef(null);
  const textRefs = useRef([]);
  const flashRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Timeline that controls the entire sequence
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
        pin: '.parallax-pinned-section',
      }
    });

    // 1. Initial State (Focus & Prepare)
    // Hide Title
    tl.to(titleRef.current, { opacity: 0, y: -50, duration: 0.05 }, 0.05);

    // Fade in text: "Focus"
    tl.to(textRefs.current[0], { opacity: 1, scale: 1, duration: 0.1 }, 0.05)
      .to(textRefs.current[0], { opacity: 0, scale: 1.1, duration: 0.1 }, 0.2);

    // 2. Draw Bow & Arrow (Aim & Release)
    tl.to(textRefs.current[1], { opacity: 1, scale: 1, duration: 0.1 }, 0.25)
      .to(textRefs.current[1], { opacity: 0, scale: 1.1, duration: 0.1 }, 0.4);

    // Bow pulls back slightly
    tl.to(bowRef.current, { scaleX: 0.8, x: -50, duration: 0.2 }, 0.25);
    // Arrow pulls back
    tl.to(arrowRef.current, { x: -100, duration: 0.2 }, 0.25);

    tl.to(textRefs.current[2], { opacity: 1, scale: 1, duration: 0.1 }, 0.45)
      .to(textRefs.current[2], { opacity: 0, scale: 1.1, duration: 0.1 }, 0.6);

    // 3. The Shoot (Massive Parallax Zoom)
    // The arrow shoots forward
    tl.to(arrowRef.current, { x: 500, scale: 0.1, duration: 0.2 }, 0.65);
    // The bow snaps back
    tl.to(bowRef.current, { scaleX: 1, x: -150, opacity: 0, duration: 0.1 }, 0.65);
    // The target zooms in aggressively
    tl.to(targetRef.current, { scale: 5, zIndex: 10, duration: 0.2 }, 0.65);
    // The archer silhouette fades/zooms out
    tl.to(archerRef.current, { scale: 1.5, opacity: 0, duration: 0.15 }, 0.65);

    // 4. Impact (Bullseye)
    // White flash effect
    tl.to(flashRef.current, { opacity: 1, duration: 0.02 }, 0.84)
      .to(flashRef.current, { opacity: 0, duration: 0.1 }, 0.86);

    // Show Impact Text
    tl.to(textRefs.current[3], { opacity: 1, scale: 1, duration: 0.05 }, 0.85)
      .to(textRefs.current[3], { opacity: 0, scale: 1.2, duration: 0.05 }, 0.95);

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const stepsText = ["Focus", "Aim", "Release", "BULLSEYE"];

  return (
    <section ref={containerRef} className="parallax-scroll-container">
      <div className="parallax-pinned-section">
        
        {/* Layer 1: Background & Target */}
        <div className="plax-layer bg-layer">
          <div ref={targetRef} className="target-layer" style={{ transform: 'scale(1)' }}>
            <TargetSVG />
          </div>
        </div>

        {/* Layer 2: The Archer (Midground) */}
        <div ref={archerRef} className="plax-layer archer-layer">
          <div className="archer-placeholder">
            [ ADD ARCHER.PNG HERE ]
          </div>
        </div>

        {/* Layer 3: The Arrow */}
        <div ref={arrowRef} className="plax-layer arrow-layer" style={{ transform: 'translateX(0px)', paddingRight: '20vw' }}>
          <ArrowSVG />
        </div>

        {/* Layer 4: The Bow (Foreground) */}
        <div ref={bowRef} className="plax-layer bow-layer" style={{ transformOrigin: 'left center', paddingRight: '30vw' }}>
          <BowSVG />
        </div>

        {/* Flash Effect Layer */}
        <div ref={flashRef} className="plax-flash"></div>

        {/* Typography Overlay */}
        <div className="plax-text-overlay">
          <h2 ref={titleRef} className="plax-main-title">
            Do You Have What It Takes To Hit The Target?
          </h2>

          {stepsText.map((text, index) => (
            <div 
              key={index}
              ref={el => textRefs.current[index] = el}
              className={`plax-step-text ${index === 3 ? 'plax-impact-text' : ''}`}
            >
              {text}
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default ArcheryScrollAnimation;
