import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ArcheryScrollAnimation.css';

gsap.registerPlugin(ScrollTrigger);

const ArcheryScrollAnimation = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    // Wait for elements to be ready
    if (!containerRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // --------------------------------------------------------
    // TODO for user: Replace with actual image sequence loading
    // --------------------------------------------------------
    // const frameCount = 150;
    // const images = [];
    // for (let i = 0; i < frameCount; i++) {
    //   const img = new Image();
    //   img.src = `/assets/archery-sequence/frame_${i}.jpg`;
    //   images.push(img);
    // }

    // Fallback animation function when we don't have images
    const drawFallbackFrame = (progress) => {
      // Clear canvas
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = '#0a0a0a'; // Match background
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      
      // Draw grid
      context.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      context.lineWidth = 1;
      for (let i = 0; i < canvas.width; i += 50) {
        context.beginPath(); context.moveTo(i, 0); context.lineTo(i, canvas.height); context.stroke();
      }
      for (let i = 0; i < canvas.height; i += 50) {
        context.beginPath(); context.moveTo(0, i); context.lineTo(canvas.width, i); context.stroke();
      }

      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.font = 'bold 24px monospace';

      // 1st step: 0.0 - 0.2 (Pull the bow)
      if (progress < 0.2) {
        const localProg = progress / 0.2;
        context.fillStyle = `rgba(255, 255, 255, ${localProg})`;
        context.fillText("[ ASSET REQUIRED: 3D Render of Girl Pulling Bow ]", cx, cy);
        
        context.beginPath();
        context.arc(cx, cy + 50, 40 * localProg, 0, Math.PI * 2);
        context.strokeStyle = '#E01A22';
        context.lineWidth = 4;
        context.stroke();
      }
      // 2nd step: 0.2 - 0.4 (Load Arrow)
      else if (progress < 0.4) {
        const localProg = (progress - 0.2) / 0.2;
        context.fillStyle = '#fff';
        context.fillText("[ ASSET REQUIRED: Loading Arrow ]", cx, cy);
        
        // draw arrow loading
        context.beginPath();
        context.moveTo(cx - 100 * (1-localProg), cy + 50);
        context.lineTo(cx + 100 * localProg, cy + 50);
        context.strokeStyle = '#FFB800';
        context.lineWidth = 2;
        context.stroke();
      }
      // 3rd step: 0.4 - 0.6 (Stretch Bow)
      else if (progress < 0.6) {
        const localProg = (progress - 0.4) / 0.2;
        context.fillStyle = '#fff';
        context.fillText("[ ASSET REQUIRED: Stretching Bow ]", cx, cy);
        
        // draw bow bending
        context.beginPath();
        context.moveTo(cx - 100, cy + 100);
        context.quadraticCurveTo(cx - 150 * localProg, cy + 50, cx - 100, cy);
        context.strokeStyle = '#E01A22';
        context.stroke();
      }
      // 4th step: 0.6 - 0.8 (Shoot Arrow)
      else if (progress < 0.8) {
        const localProg = (progress - 0.6) / 0.2;
        context.fillStyle = '#fff';
        context.fillText("[ ASSET REQUIRED: Arrow Traveling ]", cx, cy);
        
        // draw arrow traveling
        context.beginPath();
        context.moveTo(cx + (canvas.width / 2) * localProg, cy + 50);
        context.lineTo(cx + 50 + (canvas.width / 2) * localProg, cy + 50);
        context.strokeStyle = '#FFB800';
        context.stroke();
      }
      // 5th step: 0.8 - 1.0 (Hit Target)
      else {
        const localProg = (progress - 0.8) / 0.2;
        context.fillStyle = '#fff';
        context.fillText("[ ASSET REQUIRED: Arrow Hits Target ]", cx, cy);
        
        context.beginPath();
        context.arc(cx, cy + 50, 60, 0, Math.PI * 2);
        context.fillStyle = `rgba(224, 26, 34, ${localProg})`;
        context.fill();
        
        context.beginPath();
        context.arc(cx, cy + 50, 40, 0, Math.PI * 2);
        context.fillStyle = '#FFB800';
        context.fill();
      }
    };

    // Draw initial state
    drawFallbackFrame(0);

    // Setup GSAP Timeline and ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1, // Smooth scrubbing
        pin: '.archery-pinned-section', // Pin the visual part
        id: 'archery-scroll',
        onUpdate: (self) => {
          const progress = self.progress;
          // In a real implementation with images:
          // const frameIndex = Math.min(
          //   frameCount - 1, 
          //   Math.floor(progress * frameCount)
          // );
          // context.drawImage(images[frameIndex], 0, 0);
          
          drawFallbackFrame(progress);
        }
      }
    });

    // Animate text sections
    textRefs.current.forEach((textRef, i) => {
      if (!textRef) return;
      
      const stepProg = 1 / 5;
      const start = i * stepProg;
      const duration = stepProg * 0.5;

      // Text fading in and translating
      tl.to(textRef, {
        opacity: 1,
        y: 0,
        duration: duration
      }, start)
      .to(textRef, {
        opacity: 0,
        y: -30,
        duration: duration
      }, start + stepProg * 0.8);
    });

    // Handle Resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const st = ScrollTrigger.getById('archery-scroll');
      if (st) {
        drawFallbackFrame(st.progress);
      } else {
        drawFallbackFrame(0);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const steps = [
    { title: "The Stance", desc: "A realistic 3D representation showing the archer taking position and pulling the bow." },
    { title: "Load the Arrow", desc: "Placing the arrow on the rest and knocking it on the string." },
    { title: "Full Draw", desc: "Stretching the bow string back to the anchor point with intense focus." },
    { title: "The Release", desc: "Releasing the string, sending the arrow flying through the air." },
    { title: "Bullseye", desc: "The arrow makes contact with the center of the target." },
  ];

  return (
    <section ref={containerRef} className="archery-scroll-container">
      <div className="archery-pinned-section">
        <canvas ref={canvasRef} className="archery-canvas" />
        
        <div className="archery-text-overlay">
          {steps.map((step, index) => (
            <div 
              key={index}
              ref={el => textRefs.current[index] = el}
              className="archery-step"
            >
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArcheryScrollAnimation;
