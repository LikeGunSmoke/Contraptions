import React from 'react';
import { useThree, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import img from './images/marioBG.png';

export default function Background({ ...props }) {

  const { viewport } = useThree();
  const map = useLoader(THREE.TextureLoader, img);

  return (
    <mesh position={[0, 0, -3]} >
      <planeGeometry attach='geometry' args={[viewport.width*1.4, viewport.height*1.4]} />
      <meshBasicMaterial attach='material' map={map} />
    </mesh>
  );
};