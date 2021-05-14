import React, { Suspense } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { useBox } from '@react-three/cannon';
import RedShell from './3DModels/RedShell.js';

const MovingRedShell = ({ args, color, ...props }) => {

  const {viewport} = useThree();
  const [ref, api] = useBox(() => ({args, ...props}));

  useFrame(({ clock }) => api.position.set(Math.sin(clock.getElapsedTime()) * 5, 0, 0));
  useFrame(({ clock }) => api.rotation.set(0, Math.sin(clock.getElapsedTime()) * 5, 0));


  return (
  <mesh ref={ref}>
    <Suspense fallback={null}>
      <RedShell scale={[0.005, 0.005, 0.005]} position={[0,0,0]}/>
    </Suspense>
  </mesh>
  )
};

export default MovingRedShell;