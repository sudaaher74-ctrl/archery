import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './InteractiveTarget.css';

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    title: 'Beginner',
    desc: 'Master the fundamentals and proper form.',
    level: '01',
    color: '#111111'
  },
  {
    title: 'Intermediate',
    desc: 'Refine technique and build consistency.',
    level: '02',
    color: 'var(--color-accent-blue)'
  },
  {
    title: 'Advanced',
    desc: 'Competitive edge and mental focus.',
    level: '03',
    color: 'var(--color-accent-red)'
  }
];

const InteractiveTarget = () => {
  const sectionRef = useRef(null);
  const targetRef = useRef(null);
  const arrowRef = useRef(null);
  const ringsRef = useRef([]);
  const programsRef = useRef(null);
  const programBoxesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add({
        isDesktop: "(min-width: 769px)",
        isMobile: "(max-width: 768px)"
      }, (context) => {
        let { isDesktop, isMobile } = context.conditions;

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
          { x: -1000, y: isMobile ? 200 : 500, rotation: -45, opacity: 0 },
          { x: 0, y: 0, rotation: 0, opacity: 1, duration: 2, ease: "power2.out" }
        );

        // Animate Rings Glowing sequentially
        const ringColors = ['#111111', 'var(--color-accent-blue)', 'var(--color-accent-red)', 'var(--color-accent-yellow)'];
        const ringGlows = ['rgba(17, 17, 17, 0.5)', 'rgba(0, 114, 181, 0.5)', 'rgba(224, 26, 34, 0.5)', 'rgba(255, 184, 0, 0.5)'];

        ringsRef.current.forEach((ring, index) => {
          tl.to(ring, {
            borderColor: ringColors[index],
            boxShadow: `0 0 20px ${ringGlows[index]}, inset 0 0 20px ${ringGlows[index]}`,
            backgroundColor: ringColors[index],
            duration: 0.5
          }, "-=1.5");
        });

        // Move target and fade in the programs
        if (isDesktop) {
          tl.to(targetRef.current, { x: '-20vw', scale: 0.8, duration: 1.5, ease: "power2.inOut" }, "+=0.5");
          tl.to(programsRef.current, { opacity: 1, x: 0, duration: 1.5, ease: "power2.out" }, "<");
        } else {
          tl.to(targetRef.current, { y: '-15vh', scale: 0.6, duration: 1.5, ease: "power2.inOut" }, "+=0.5");
          tl.to(programsRef.current, { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }, "<");
        }

        // Stagger in the small program boxes
        tl.fromTo(programBoxesRef.current,
          { opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 30 : 0 },
          { opacity: 1, x: 0, y: 0, stagger: 0.2, duration: 0.8, ease: "power2.out" },
          "-=1"
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToRings = (el) => {
    if (el && !ringsRef.current.includes(el)) {
      ringsRef.current.push(el);
    }
  };

  const addToBoxes = (el) => {
    if (el && !programBoxesRef.current.includes(el)) {
      programBoxesRef.current.push(el);
    }
  };

  return (
    <section className="target-section" ref={sectionRef}>
      <div className="target-split-container">
        {/* Left Side: The Interactive Target */}
        <div className="target-left" ref={targetRef}>
          <div className="target-container">
            {/* The Rings */}
            <div className="target-ring ring-1" ref={addToRings}>
              <span className="ring-label">Beginner</span>
            </div>
            <div className="target-ring ring-2" ref={addToRings}>
              <span className="ring-label">Intermediate</span>
            </div>
            <div className="target-ring ring-3" ref={addToRings}>
              <span className="ring-label">Advanced</span>
            </div>
            <div className="target-ring ring-4" ref={addToRings}>
              <span className="ring-label ring-label-center">Champion</span>
            </div>

            {/* The Arrow */}
            <div className="target-arrow" ref={arrowRef}>
              <div className="arrow-shaft"></div>
              <div className="arrow-head"></div>
              <div className="arrow-fletching"></div>
            </div>
          </div>
        </div>

        {/* Right Side: Training Programs Info */}
        <div className="target-right" ref={programsRef}>
          <div className="programs-info">
            <h2 className="title-secondary" style={{ marginBottom: '3rem' }}>
              OUR <span className="title-gold">PROCESS</span>
            </h2>
            
            <div className="programs-list">
              {programs.map((prog, index) => (
                <div className="program-box glass" key={index} ref={addToBoxes}>
                  <div className="prog-level" style={{ color: prog.color }}>{prog.level}</div>
                  <div className="prog-details">
                    <h3 className="prog-title">{prog.title}</h3>
                    <p className="prog-desc">{prog.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InteractiveTarget;
