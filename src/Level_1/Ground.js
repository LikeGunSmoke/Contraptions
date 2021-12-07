import React from 'react';
import { useThree } from '@react-three/fiber';
import { usePlane } from '@react-three/cannon';
import { useDispatch } from 'react-redux';
import { resetGame } from '../state/actions/level_1/actions.js';

export default function Ground({ ...props }) {

  const { viewport } = useThree();
  const dispatch = useDispatch();

  const [ref] = usePlane(() => ({
    type: 'Static',
    position: [0, -viewport.height,0],
    rotation: [-Math.PI/2, 0, 0],
    onCollide: (e) => {
      const name = e.body.name;
      if (name === 'Mario') {
        dispatch(resetGame);
      };
    },
    ...props,
  }));

  return (
    <mesh name='Ground' ref={ref} >
      <planeGeometry attach='geometry' />
      <meshBasicMaterial attach='material' />
    </mesh>
  )
}