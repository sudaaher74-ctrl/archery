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
      
      {/* DESKTOP VIEW: Interactive Target */}
      <div className="target-split-container desktop-only">
        <div className="target-left" ref={targetRef}>
          <div className="target-container">
            <div className="target-ring ring-1" ref={addToRings}><span className="ring-label">Beginner</span></div>
            <div className="target-ring ring-2" ref={addToRings}><span className="ring-label">Intermediate</span></div>
            <div className="target-ring ring-3" ref={addToRings}><span className="ring-label">Advanced</span></div>
            <div className="target-ring ring-4" ref={addToRings}><span className="ring-label ring-label-center">Champion</span></div>
            <div className="target-arrow" ref={arrowRef}>
              <div className="arrow-shaft"></div><div className="arrow-head"></div><div className="arrow-fletching"></div>
            </div>
          </div>
        </div>

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

      {/* MOBILE VIEW: Cards matching the screenshot */}
      <div className="mobile-programs-container mobile-only">
        <h5 className="section-subtitle">OUR PROGRAMS</h5>
        <h2 className="section-title">
          TRAIN. IMPROVE. <span className="title-gold">EXCEL.</span>
        </h2>
        
        <div className="mobile-program-cards">
          {/* Card 1 */}
          <div className="prog-card">
            <div className="prog-card-img" style={{ backgroundImage: "url('/gallery1.jpg')" }}></div>
            <div className="prog-card-content">
              <div className="prog-card-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-yellow, #FFC107)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <h3>BEGINNER PROGRAM</h3>
              </div>
              <p>Perfect for new archers. Learn the basics, build confidence and enjoy the journey.</p>
              <button className="prog-learn-more">LEARN MORE &rarr;</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="prog-card">
            <div className="prog-card-img" style={{ backgroundImage: "url('/gallery2.jpg')" }}></div>
            <div className="prog-card-content">
              <div className="prog-card-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-yellow, #FFC107)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                <h3>INTERMEDIATE PROGRAM</h3>
              </div>
              <p>Take your skills to the next level with structured training and techniques.</p>
              <button className="prog-learn-more">LEARN MORE &rarr;</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="prog-card">
            <div className="prog-card-img" style={{ backgroundImage: "url('/gallery3.jpg')" }}></div>
            <div className="prog-card-content">
              <div className="prog-card-header">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-yellow, #FFC107)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18"></path><path d="M12 3l9 9-9 9"></path><path d="M3 12l4-4"></path><path d="M3 12l4 4"></path></svg>
                <h3>ADVANCED PROGRAM</h3>
              </div>
              <p>For competitive archers aiming for excellence and podium finishes.</p>
              <button className="prog-learn-more">LEARN MORE &rarr;</button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default InteractiveTarget;
