import React, { Suspense } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { useBox } from '@react-three/cannon';
import Thwomp from './3DModels/Thwomp.js';

const MovingThwomp = ({ args, color, ...props }) => {

  const {viewport} = useThree();
  const [ref, api] = useBox(() => ({args, ...props, rotation: [0, -3, 0]}));

  useFrame(({ clock }) => api.position.set(0, Math.sin(clock.getElapsedTime()) * 5, 0));

  return (
  <mesh ref={ref}>
    <Suspense fallback={null}>
      <Thwomp scale={[0.001, 0.001, 0.001]} position={[0,0,0]}/>
    </Suspense>
  </mesh>
  )
};

export default MovingThwomp;