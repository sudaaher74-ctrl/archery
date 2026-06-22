import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ArcheryScrollAnimation.css';

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://images.unsplash.com/photo-1589317585090-bb049007f595?q=80&w=2070&auto=format&fit=crop", // Archer aiming
  "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=2072&auto=format&fit=crop", // Arrow close up
  "https://images.unsplash.com/photo-1502446757134-972c72eb88ed?q=80&w=2070&auto=format&fit=crop", // Bow in action
  "https://images.unsplash.com/photo-1511516245367-9c60e40d43a6?q=80&w=2070&auto=format&fit=crop"  // Target / Bullseye
];

const ArcheryScrollAnimation = () => {
  const containerRef = useRef(null);
  const imageRefs = useRef([]);
  const textRefs = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1, // Smooth 1-second lag
        pin: '.photo-pinned-section',
      }
    });

    // Make Image 1 visible initially
    gsap.set(imageRefs.current[0], { opacity: 1 });

    // 0. Initial Title fades out
    tl.to(titleRef.current, { opacity: 0, y: -50, duration: 0.5 }, 0);

    // 1. FOCUS (Image 1 zooms slowly)
    tl.to(imageRefs.current[0], { scale: 1.1, duration: 2 }, 0);
    tl.to(textRefs.current[0], { opacity: 1, y: -20, duration: 0.5 }, 0.5)
      .to(textRefs.current[0], { opacity: 0, y: -40, duration: 0.5 }, 1.5);

    // 2. AIM (Crossfade to Image 2)
    tl.to(imageRefs.current[1], { opacity: 1, duration: 0.5 }, 2);
    tl.to(imageRefs.current[1], { scale: 1.1, duration: 2 }, 2); // Ken burns
    tl.to(textRefs.current[1], { opacity: 1, y: -20, duration: 0.5 }, 2.5)
      .to(textRefs.current[1], { opacity: 0, y: -40, duration: 0.5 }, 3.5);

    // 3. RELEASE (Crossfade to Image 3)
    tl.to(imageRefs.current[2], { opacity: 1, duration: 0.5 }, 4);
    tl.to(imageRefs.current[2], { scale: 1.1, duration: 2 }, 4);
    tl.to(textRefs.current[2], { opacity: 1, y: -20, duration: 0.5 }, 4.5)
      .to(textRefs.current[2], { opacity: 0, y: -40, duration: 0.5 }, 5.5);

    // 4. BULLSEYE (Crossfade to Image 4)
    tl.to(imageRefs.current[3], { opacity: 1, duration: 0.5 }, 6);
    tl.to(imageRefs.current[3], { scale: 1.05, duration: 2 }, 6);
    tl.to(textRefs.current[3], { opacity: 1, scale: 1, duration: 0.5 }, 6.5)
      .to(textRefs.current[3], { opacity: 0, scale: 1.1, duration: 0.5 }, 7.5);

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const stepsText = ["Focus.", "Aim.", "Release.", "Bullseye."];

  return (
    <section ref={containerRef} className="photo-scroll-container">
      <div className="photo-pinned-section">
        
        {/* Background Images */}
        {images.map((src, index) => (
          <div
            key={index}
            ref={el => imageRefs.current[index] = el}
            className="photo-layer"
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}

        {/* Typography Overlay */}
        <div className="photo-text-overlay">
          <h2 ref={titleRef} className="photo-main-title">
            Do You Have What It Takes To Hit The Target?
          </h2>

          {stepsText.map((text, index) => (
            <div 
              key={index}
              ref={el => textRefs.current[index] = el}
              className={`photo-step-text ${index === 3 ? 'photo-impact-text' : ''}`}
              style={{ transform: 'translateY(20px)' }}
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
