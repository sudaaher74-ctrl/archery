import React, { useEffect, useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const ArcherModel = ({ scrollProgress, ...props }) => {
  const group = useRef();
  // Expects archer.glb to have these exact animations
  const { nodes, materials, animations } = useGLTF('/models/archer.glb');
  const { actions } = useAnimations(animations, group);

  const clipMappings = [
    { name: 'Idle_Stance', start: 0, end: 0.15 },
    { name: 'Load_Arrow', start: 0.15, end: 0.30 },
    { name: 'Nock_Arrow', start: 0.30, end: 0.45 },
    { name: 'Draw_Bow', start: 0.45, end: 0.70 },
    { name: 'Hold_Aim', start: 0.70, end: 0.80 },
    { name: 'Release_Shot', start: 0.80, end: 0.90 },
    { name: 'Follow_Through', start: 0.90, end: 1.00 },
  ];

  useEffect(() => {
    // Play all actions and pause them immediately
    if (!actions) return;
    Object.values(actions).forEach(action => {
      if (action) {
        action.play();
        action.paused = true;
        action.setEffectiveWeight(0);
      }
    });
  }, [actions]);

  useFrame(() => {
    if (!actions) return;
    const p = scrollProgress.current;

    // Find the active clip based on scroll percentage
    let activeClip = null;
    let localProgress = 0;

    for (let i = 0; i < clipMappings.length; i++) {
      const clip = clipMappings[i];
      if (p >= clip.start && p <= clip.end) {
        activeClip = clip;
        localProgress = (p - clip.start) / (clip.end - clip.start);
        break;
      }
    }

    // Edge cases: scroll past bounds
    if (p < 0) {
      activeClip = clipMappings[0];
      localProgress = 0;
    }
    if (p > 1) {
      activeClip = clipMappings[clipMappings.length - 1];
      localProgress = 1;
    }

    // Apply weights and scrub time
    Object.keys(actions).forEach(key => {
      const action = actions[key];
      if (!action) return;
      if (activeClip && key === activeClip.name) {
        action.setEffectiveWeight(1);
        const duration = action.getClip().duration;
        action.time = localProgress * duration;
      } else {
        action.setEffectiveWeight(0);
      }
    });
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Scene || nodes.scene || nodes.RootNode || nodes[Object.keys(nodes)[0]]} />
    </group>
  );
};

// Preload to ensure smooth rendering
useGLTF.preload('/models/archer.glb');

export default ArcherModel;
