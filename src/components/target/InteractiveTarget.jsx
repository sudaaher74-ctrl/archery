import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './InteractiveTarget.css';

gsap.registerPlugin(ScrollTrigger);

const InteractiveTarget = () => {
  const sectionRef = useRef(null);
  const targetRef = useRef(null);
  const arrowRef = useRef(null);
  const ringsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: 1,
        }
      });

      // Animate Arrow Flying in
      tl.fromTo(arrowRef.current, 
        { x: -1000, y: 500, rotation: -45, opacity: 0 },
        { x: 0, y: 0, rotation: 0, opacity: 1, duration: 2, ease: "power2.out" }
      );

      // Animate Rings Glowing sequentially
      const ringColors = [
        '#111111',                  // Ring 1: Black
        'var(--color-accent-blue)', // Ring 2: Blue
        'var(--color-accent-red)',  // Ring 3: Red
        'var(--color-accent-yellow)'// Ring 4: Yellow
      ];
      
      const ringGlows = [
        'rgba(17, 17, 17, 0.5)',
        'rgba(0, 114, 181, 0.5)',
        'rgba(224, 26, 34, 0.5)',
        'rgba(255, 184, 0, 0.5)'
      ];

      ringsRef.current.forEach((ring, index) => {
        tl.to(ring, {
          borderColor: ringColors[index],
          boxShadow: `0 0 20px ${ringGlows[index]}, inset 0 0 20px ${ringGlows[index]}`,
          backgroundColor: ringColors[index],
          duration: 0.5
        }, "-=1.5");
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !ringsRef.current.includes(el)) {
      ringsRef.current.push(el);
    }
  };

  return (
    <section className="target-section" ref={sectionRef}>
      <div className="target-container" ref={targetRef}>
        
        {/* The Rings */}
        <div className="target-ring ring-1" ref={addToRefs}>
          <span className="ring-label">Beginner</span>
        </div>
        <div className="target-ring ring-2" ref={addToRefs}>
          <span className="ring-label">Intermediate</span>
        </div>
        <div className="target-ring ring-3" ref={addToRefs}>
          <span className="ring-label">Advanced</span>
        </div>
        <div className="target-ring ring-4" ref={addToRefs}>
          <span className="ring-label ring-label-center">Champion</span>
        </div>

        {/* The Arrow */}
        <div className="target-arrow" ref={arrowRef}>
          <div className="arrow-shaft"></div>
          <div className="arrow-head"></div>
          <div className="arrow-fletching"></div>
        </div>

      </div>
    </section>
  );
};

export default InteractiveTarget;
