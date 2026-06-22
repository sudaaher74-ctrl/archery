import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ArcheryScrollAnimation.css';

gsap.registerPlugin(ScrollTrigger);

// --- 3D Components ---

const BowAndArrow = ({ scrollProgress }) => {
  const groupRef = useRef();
  const bowRef = useRef();
  const stringRef = useRef();
  const arrowRef = useRef();
  
  // Create bow geometry (a curve)
  const curve = new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(0, 2, 0),
    new THREE.Vector3(0.5, 0, 0),
    new THREE.Vector3(0, -2, 0)
  );
  
  useFrame(() => {
    if (!groupRef.current || !arrowRef.current || !stringRef.current || !bowRef.current) return;
    
    // 0.0 - 0.2: Stance (Camera moves, bow slightly tilts)
    // 0.2 - 0.4: Load Arrow (Arrow moves into position)
    // 0.4 - 0.6: Full Draw (Bow bends, string pulls back, arrow pulls back)
    // 0.6 - 0.8: Release (Arrow shoots)
    // 0.8 - 1.0: Bullseye (Arrow at target)

    const p = scrollProgress.current;

    // Bow tilt
    if (p < 0.2) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, Math.PI / 4, 0.1);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, 0, 0.1);
    } else if (p < 0.6) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, Math.PI / 2, 0.1);
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, Math.PI / 12, 0.1);
    }

    // Arrow loading (0.2 - 0.4)
    if (p < 0.2) {
      arrowRef.current.position.set(0, -5, 0); // hidden below
      arrowRef.current.visible = false;
    } else if (p >= 0.2 && p < 0.4) {
      arrowRef.current.visible = true;
      const loadP = (p - 0.2) / 0.2; // 0 to 1
      arrowRef.current.position.x = THREE.MathUtils.lerp(-2, 0.2, loadP);
      arrowRef.current.position.y = THREE.MathUtils.lerp(-2, 0, loadP);
      arrowRef.current.position.z = 0;
    }

    // Draw string and bend bow (0.4 - 0.6)
    let pullback = 0;
    if (p >= 0.4 && p < 0.6) {
      const drawP = (p - 0.4) / 0.2; // 0 to 1
      pullback = drawP * 1.5; // pull back by 1.5 units
      
      // Bend bow (flatten the curve slightly by scaling x)
      bowRef.current.scale.x = 1 - (drawP * 0.4);
      
      arrowRef.current.position.x = 0.2 - pullback;
    } else if (p < 0.4) {
      bowRef.current.scale.x = 1;
    }

    // Release (0.6 - 0.8)
    if (p >= 0.6 && p < 0.8) {
      const releaseP = (p - 0.6) / 0.2; // 0 to 1
      pullback = 0; // String snaps back immediately
      bowRef.current.scale.x = 1; // Bow snaps back
      
      // Arrow shoots forward (Target is at x = 30)
      arrowRef.current.position.x = THREE.MathUtils.lerp(0.2 - 1.5, 29, releaseP);
    }

    // Bullseye (0.8 - 1.0)
    if (p >= 0.8) {
      arrowRef.current.position.x = 29; // Stuck in target
      pullback = 0;
      bowRef.current.scale.x = 1;
    }

    // Update string geometry based on pullback
    const stringGeo = stringRef.current.geometry;
    const positions = stringGeo.attributes.position.array;
    
    // Top point
    positions[0] = 0; positions[1] = 2; positions[2] = 0;
    // Middle point (pulled back)
    positions[3] = -pullback; positions[4] = 0; positions[5] = 0;
    // Bottom point
    positions[6] = 0; positions[7] = -2; positions[8] = 0;
    
    stringGeo.attributes.position.needsUpdate = true;
  });

  return (
    <group ref={groupRef} position={[-5, 0, 0]}>
      {/* The Bow */}
      <mesh ref={bowRef}>
        <tubeGeometry args={[curve, 20, 0.05, 8, false]} />
        <meshStandardMaterial color="#222" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* The String */}
      <line ref={stringRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={3}
            array={new Float32Array(9)}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#ffffff" linewidth={2} />
      </line>

      {/* The Arrow */}
      <group ref={arrowRef} visible={false}>
        {/* Shaft */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.02, 0.02, 3, 8]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        {/* Tip */}
        <mesh position={[1.5, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
          <coneGeometry args={[0.06, 0.2, 8]} />
          <meshStandardMaterial color="#silver" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Fletching */}
        <mesh position={[-1.4, 0.05, 0]} rotation={[Math.PI/2, 0, 0]}>
          <planeGeometry args={[0.3, 0.1]} />
          <meshStandardMaterial color="#E01A22" side={THREE.DoubleSide} />
        </mesh>
        <mesh position={[-1.4, -0.05, 0]} rotation={[Math.PI/2, 0, 0]}>
          <planeGeometry args={[0.3, 0.1]} />
          <meshStandardMaterial color="#E01A22" side={THREE.DoubleSide} />
        </mesh>
      </group>
    </group>
  );
};

const Target = () => {
  return (
    <group position={[25, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
      {/* Stand */}
      <mesh position={[0, -2, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 4]} />
        <meshStandardMaterial color="#888" />
      </mesh>
      <mesh position={[0, -4, 0]} rotation={[Math.PI/2, 0, 0]}>
         <cylinderGeometry args={[1.5, 1.5, 0.1]} />
         <meshStandardMaterial color="#333" />
      </mesh>

      {/* Target Face */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2, 2, 0.2, 32]} />
        <meshStandardMaterial color="#fff" />
      </mesh>
      
      {/* Rings */}
      <mesh position={[0, 0.11, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.2, 1.6, 32]} />
        <meshBasicMaterial color="#000" side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0.12, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.8, 1.2, 32]} />
        <meshBasicMaterial color="#0072B5" side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0.13, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.4, 0.8, 32]} />
        <meshBasicMaterial color="#E01A22" side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0.14, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0, 0.4, 32]} />
        <meshBasicMaterial color="#FFB800" side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

const SceneCamera = ({ scrollProgress }) => {
  const cameraRef = useRef();

  useFrame(() => {
    if (!cameraRef.current) return;
    const p = scrollProgress.current;

    // Animate camera based on scroll progress
    if (p < 0.2) {
      // Circle around the bow
      const angle = THREE.MathUtils.lerp(-Math.PI/4, Math.PI/4, p / 0.2);
      cameraRef.current.position.x = -5 + Math.sin(angle) * 8;
      cameraRef.current.position.z = Math.cos(angle) * 8;
      cameraRef.current.position.y = 2;
      cameraRef.current.lookAt(-5, 0, 0);
    } 
    else if (p < 0.6) {
      // Lock behind the archer for loading and draw
      cameraRef.current.position.x = THREE.MathUtils.lerp(cameraRef.current.position.x, -12, 0.05);
      cameraRef.current.position.y = THREE.MathUtils.lerp(cameraRef.current.position.y, 1, 0.05);
      cameraRef.current.position.z = THREE.MathUtils.lerp(cameraRef.current.position.z, 2, 0.05);
      
      const targetX = THREE.MathUtils.lerp(-5, 25, (p - 0.2)/0.4);
      cameraRef.current.lookAt(targetX, 0, 0);
    }
    else if (p < 0.8) {
      // Follow the arrow (dynamic FOV zoom)
      cameraRef.current.position.x = THREE.MathUtils.lerp(-12, 10, (p - 0.6) / 0.2);
      cameraRef.current.lookAt(25, 0, 0);
    }
    else {
      // Bullseye zoom
      cameraRef.current.position.x = THREE.MathUtils.lerp(cameraRef.current.position.x, 20, 0.1);
      cameraRef.current.position.y = THREE.MathUtils.lerp(cameraRef.current.position.y, 0.5, 0.1);
      cameraRef.current.position.z = THREE.MathUtils.lerp(cameraRef.current.position.z, 3, 0.1);
      cameraRef.current.lookAt(25, 0, 0);
    }
  });

  return <PerspectiveCamera ref={cameraRef} makeDefault fov={50} position={[-5, 2, 8]} />;
};


// --- React Component ---

const ArcheryScrollAnimation = () => {
  const containerRef = useRef(null);
  const scrollProgress = useRef(0);
  const textRefs = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup GSAP Timeline and ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1, // Smooth scrubbing
        pin: '.archery-pinned-section',
        id: 'archery-scroll',
        onUpdate: (self) => {
          scrollProgress.current = self.progress;
        }
      }
    });

    // Animate text sections overlay
    textRefs.current.forEach((textRef, i) => {
      if (!textRef) return;
      
      const stepProg = 1 / 5;
      const start = i * stepProg;
      const duration = stepProg * 0.5;

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

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const steps = [
    { title: "The Stance", desc: "Taking position and preparing the bow." },
    { title: "Load the Arrow", desc: "Placing the arrow on the rest and knocking it on the string." },
    { title: "Full Draw", desc: "Stretching the bow string back to the anchor point with intense focus." },
    { title: "The Release", desc: "Releasing the string, sending the arrow flying through the air." },
    { title: "Bullseye", desc: "The perfect shot hits the center of the target." },
  ];

  return (
    <section ref={containerRef} className="archery-scroll-container">
      <div className="archery-pinned-section">
        
        {/* The 3D Scene */}
        <div className="archery-canvas-wrapper" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
          <Canvas shadows>
            <color attach="background" args={['#050505']} />
            <fog attach="fog" args={['#050505', 10, 50]} />
            
            <ambientLight intensity={0.5} />
            <directionalLight 
              position={[10, 20, 10]} 
              intensity={2} 
              castShadow 
              shadow-bias={-0.0001}
            />
            <spotLight position={[-10, 10, 10]} angle={0.3} penumbra={1} intensity={1} castShadow />

            <SceneCamera scrollProgress={scrollProgress} />
            
            <BowAndArrow scrollProgress={scrollProgress} />
            <Target />

            <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={50} blur={2} far={10} />
            <Environment preset="city" />
          </Canvas>
        </div>
        
        {/* Text Overlay */}
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
