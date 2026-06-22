import React, { useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ErrorBoundary } from './ErrorBoundary';
import ArcherModel from './ArcherModel';
import './ArcheryScrollAnimation.css';

gsap.registerPlugin(ScrollTrigger);

// --- Particle Systems ---
const DustParticles = () => {
  const count = 500;
  const mesh = useRef();
  
  const dummy = new THREE.Object3D();
  const particles = useRef(
    new Array(count).fill().map(() => ({
      x: (Math.random() - 0.5) * 20,
      y: (Math.random() - 0.5) * 10 + 5,
      z: (Math.random() - 0.5) * 20,
      speed: 0.01 + Math.random() * 0.02,
      offset: Math.random() * 100,
    }))
  );

  useFrame((state) => {
    particles.current.forEach((particle, i) => {
      const t = state.clock.getElapsedTime();
      dummy.position.set(
        particle.x + Math.sin(t * particle.speed + particle.offset) * 2,
        particle.y + Math.cos(t * particle.speed * 0.5 + particle.offset) * 2,
        particle.z + Math.sin(t * particle.speed * 0.8 + particle.offset) * 2
      );
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
    </instancedMesh>
  );
};

// --- Arrow Object ---
const TravelingArrow = ({ scrollProgress }) => {
  const arrowRef = useRef();

  useFrame(() => {
    if (!arrowRef.current) return;
    const p = scrollProgress.current;

    if (p < 0.80) {
      arrowRef.current.visible = false;
      arrowRef.current.position.set(0, 1.5, 0); // starting pos at bow
    } else if (p >= 0.80 && p < 0.90) {
      arrowRef.current.visible = true;
      const travelP = (p - 0.80) / 0.10;
      arrowRef.current.position.x = THREE.MathUtils.lerp(0, 29, travelP);
      arrowRef.current.scale.y = THREE.MathUtils.lerp(1, 3, Math.sin(travelP * Math.PI));
    } else {
      arrowRef.current.visible = true;
      arrowRef.current.position.x = 29;
      arrowRef.current.scale.y = 1;
    }
  });

  return (
    <group ref={arrowRef} visible={false} rotation={[0, 0, -Math.PI / 2]}>
      <mesh>
        <cylinderGeometry args={[0.02, 0.02, 3, 8]} />
        <meshStandardMaterial color="#222" />
      </mesh>
      <mesh position={[0, 1.5, 0]}>
        <coneGeometry args={[0.06, 0.2, 8]} />
        <meshStandardMaterial color="silver" metalness={1} roughness={0.2} />
      </mesh>
    </group>
  );
};

const Target = () => {
  return (
    <group position={[30, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
      <mesh position={[0, 1.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2, 2, 0.2, 64]} />
        <meshStandardMaterial color="#fff" roughness={0.8} />
      </mesh>
      {/* Target rings */}
      <mesh position={[0, 1.61, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.2, 1.6, 64]} />
        <meshBasicMaterial color="#111" side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 1.62, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.8, 1.2, 64]} />
        <meshBasicMaterial color="#0072B5" side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 1.63, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.4, 0.8, 64]} />
        <meshBasicMaterial color="#E01A22" side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 1.64, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0, 0.4, 64]} />
        <meshBasicMaterial color="#FFB800" side={THREE.DoubleSide} />
      </mesh>
      {/* Stand */}
      <mesh position={[0, -0.5, -0.5]} rotation={[-0.2, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 4]} />
        <meshStandardMaterial color="#4a3b2c" />
      </mesh>
      <mesh position={[0, -0.5, 0.5]} rotation={[0.2, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 4]} />
        <meshStandardMaterial color="#4a3b2c" />
      </mesh>
    </group>
  );
};

// --- Cinematic Camera ---
const CinematicCamera = ({ scrollProgress }) => {
  const cameraRef = useRef();

  useFrame(() => {
    if (!cameraRef.current) return;
    const p = scrollProgress.current;

    let targetX = 0, targetY = 1.5, targetZ = 0;
    let camX = -3, camY = 1.5, camZ = 4;

    if (p < 0.2) {
      const t = p / 0.2;
      camX = THREE.MathUtils.lerp(-4, -2.5, t);
      camZ = THREE.MathUtils.lerp(5, 3.5, t);
    } 
    else if (p < 0.4) {
      const t = (p - 0.2) / 0.2;
      camX = -2.5;
      camY = THREE.MathUtils.lerp(1.5, 1.2, t);
      camZ = THREE.MathUtils.lerp(3.5, 2.5, t);
    } 
    else if (p < 0.6) {
      const t = (p - 0.4) / 0.2;
      const angle = THREE.MathUtils.lerp(0, -Math.PI/6, t);
      camX = -2.5 * Math.cos(angle) - 2.5 * Math.sin(angle);
      camZ = 2.5 * Math.cos(angle) - (-2.5) * Math.sin(angle);
      targetX = THREE.MathUtils.lerp(0, 5, t);
    } 
    else if (p < 0.8) {
      const t = (p - 0.6) / 0.2;
      camX = THREE.MathUtils.lerp(-1.5, -0.5, t);
      camY = 1.6;
      camZ = THREE.MathUtils.lerp(2, 0.5, t);
      targetX = 30; 
    } 
    else if (p < 0.9) {
      const t = (p - 0.8) / 0.1;
      camX = THREE.MathUtils.lerp(-0.5, 20, t);
      camZ = THREE.MathUtils.lerp(0.5, 2, t);
      targetX = 30;
    } 
    else {
      const t = (p - 0.9) / 0.1;
      camX = 25;
      camZ = 3;
      targetX = 30;
      
      if (t < 0.2) {
        camX += (Math.random() - 0.5) * 0.2;
        camY += (Math.random() - 0.5) * 0.2;
      }
    }

    cameraRef.current.position.lerp(new THREE.Vector3(camX, camY, camZ), 0.1);
    
    if (!cameraRef.current.userData.lookTarget) {
      cameraRef.current.userData.lookTarget = new THREE.Vector3(0, 1.5, 0);
    }
    cameraRef.current.userData.lookTarget.lerp(new THREE.Vector3(targetX, targetY, targetZ), 0.1);
    cameraRef.current.lookAt(cameraRef.current.userData.lookTarget);
  });

  return <PerspectiveCamera ref={cameraRef} makeDefault fov={45} near={0.1} far={1000} />;
};

const ArcheryScrollAnimation = () => {
  const containerRef = useRef(null);
  const scrollProgress = useRef(0);
  const textRefs = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5, 
        pin: '.archery-pinned-section',
        id: 'archery-scroll',
        onUpdate: (self) => {
          scrollProgress.current = self.progress;
        }
      }
    });

    tl.to(titleRef.current, { opacity: 0, y: -50, duration: 0.05 }, 0.02);

    const textTimings = [
      { start: 0.05, end: 0.15 }, // Focus
      { start: 0.20, end: 0.35 }, // Prepare
      { start: 0.40, end: 0.55 }, // Aim
      { start: 0.60, end: 0.75 }, // Release
      { start: 0.90, end: 0.95 }, // Bullseye.
      { start: 0.96, end: 1.00 }, // Welcome to the event
    ];

    textRefs.current.forEach((ref, i) => {
      if (!ref) return;
      const timing = textTimings[i];
      const duration = (timing.end - timing.start) * 0.3; 
      
      tl.to(ref, { opacity: 1, y: 0, scale: 1, duration: duration, ease: "power2.out" }, timing.start)
        .to(ref, { opacity: 0, y: -20, scale: 1.05, duration: duration, ease: "power2.in" }, timing.end - duration);
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const stepsText = [
    "Focus",
    "Prepare",
    "Aim",
    "Release",
    "Bullseye.",
    "Welcome To The Event"
  ];

  return (
    <section ref={containerRef} className="archery-scroll-container cinematic-container">
      <div className="archery-pinned-section">
        
        {/* The 3D Scene */}
        <div className="archery-canvas-wrapper">
          <Canvas shadows dpr={[1, 2]}>
            <color attach="background" args={['#0a0f12']} />
            <fog attach="fog" args={['#0a0f12', 15, 60]} />
            
            <ambientLight intensity={0.2} />
            <directionalLight 
              position={[10, 20, 10]} 
              intensity={2.5} 
              castShadow 
              shadow-bias={-0.0001}
              shadow-mapSize={[2048, 2048]}
              color="#ffe5b4"
            />
            <spotLight 
              position={[-5, 5, 5]} 
              angle={0.3} 
              penumbra={1} 
              intensity={1.5} 
              castShadow 
              color="#a4d8ff"
            />

            <CinematicCamera scrollProgress={scrollProgress} />
            <DustParticles />
            
            <ErrorBoundary>
              <Suspense fallback={null}>
                <ArcherModel scrollProgress={scrollProgress} position={[0, 0, 0]} />
              </Suspense>
            </ErrorBoundary>

            <TravelingArrow scrollProgress={scrollProgress} />
            <Target />

            <ContactShadows position={[0, 0, 0]} opacity={0.6} scale={50} blur={2.5} far={10} />
            <Environment preset="park" background blur={0.5} />
          </Canvas>
        </div>
        
        <div className="archery-text-overlay">
          <h2 ref={titleRef} className="archery-main-title">
            Do You Have What It Takes To Hit The Target?
          </h2>

          {stepsText.map((text, index) => (
            <div 
              key={index}
              ref={el => textRefs.current[index] = el}
              className={`archery-cinematic-text ${index >= 4 ? 'archery-impact-text' : ''}`}
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
