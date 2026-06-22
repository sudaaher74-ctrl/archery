import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * PRODUCTION-READY ARCHER MODEL CONTROLLER
 * 
 * This component handles loading 'archer.glb' and mapping its animations
 * to the GSAP scroll progress based on the requested timeline:
 * 
 * 0-15% = Idle_Stance
 * 15-30% = Load_Arrow
 * 30-45% = Nock_Arrow
 * 45-70% = Draw_Bow
 * 70-80% = Hold_Aim
 * 80-90% = Release_Shot
 * 90-100% = Follow_Through
 */
export default function ArcherModel({ scrollProgress, ...props }) {
  const group = useRef();
  
  // Attempt to load the GLTF model. 
  // NOTE: If '/models/archer.glb' does not exist, this will throw an error in Suspense.
  // Make sure you place your realistic archer model in the public/models/ folder.
  const { nodes, materials, animations } = useGLTF('/models/archer.glb');
  const { actions, mixer } = useAnimations(animations, group);

  // We manage the current active action so we can crossfade if needed
  const [currentAction, setCurrentAction] = useState(null);

  useEffect(() => {
    // Make sure we have actions
    if (!actions || Object.keys(actions).length === 0) return;

    // Start all animations paused, we will scrub them manually in useFrame
    Object.values(actions).forEach(action => {
      action.play();
      action.paused = true;
    });

  }, [actions]);

  useFrame(() => {
    if (!actions || Object.keys(actions).length === 0) return;

    const p = scrollProgress.current;
    
    // Timeline configuration
    const timeline = [
      { name: 'Idle_Stance', start: 0.00, end: 0.15 },
      { name: 'Load_Arrow',  start: 0.15, end: 0.30 },
      { name: 'Nock_Arrow',  start: 0.30, end: 0.45 },
      { name: 'Draw_Bow',    start: 0.45, end: 0.70 },
      { name: 'Hold_Aim',    start: 0.70, end: 0.80 },
      { name: 'Release_Shot',start: 0.80, end: 0.90 },
      { name: 'Follow_Through',start:0.90, end: 1.00 }
    ];

    // Find the current clip based on progress
    let activeClip = timeline[0];
    for (let i = 0; i < timeline.length; i++) {
      if (p >= timeline[i].start && p <= timeline[i].end) {
        activeClip = timeline[i];
        break;
      }
    }
    
    // If progress is strictly > last clip end, clamp to last clip
    if (p > timeline[timeline.length - 1].end) {
      activeClip = timeline[timeline.length - 1];
    }

    const action = actions[activeClip.name];
    if (action) {
      // Calculate local progress within this clip (0 to 1)
      const localProgress = Math.max(0, Math.min(1, (p - activeClip.start) / (activeClip.end - activeClip.start)));
      
      // Scrub the animation to the exact frame
      const clipDuration = action.getClip().duration;
      action.time = localProgress * clipDuration;
      
      // Weighting logic to ensure only the active clip is visible
      Object.values(actions).forEach(a => {
        a.weight = (a === action) ? 1 : 0;
      });
    }
  });

  // If the model hasn't loaded or nodes is empty, return null (handled by Suspense)
  if (!nodes || !nodes.Scene) return null;

  return (
    <group ref={group} {...props} dispose={null}>
      {/* 
        This renders the entire GLTF scene.
        We assume the model contains the archer, the rig, and the bow (if attached).
        Ensure materials have standard PBR properties in Blender/Maya before exporting.
      */}
      <primitive object={nodes.Scene} />
    </group>
  );
}

// Preload the model so it doesn't pop in
useGLTF.preload('/models/archer.glb');
