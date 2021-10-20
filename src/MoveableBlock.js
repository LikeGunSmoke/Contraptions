import React, { useState } from 'react';
import { useThree } from '@react-three/fiber';
import { useBox } from '@react-three/cannon';
import { useDrag } from 'react-use-gesture';


const MoveableBlock = ({args, color, ...props}) => {

  const [position] = useState([0, 0, 0]);
  const [ref, api] = useBox(() => ({args, ...props}))
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const drag = useDrag(({ offset:[x, y] }) => {
    const [,, z] = position;
    api.position.set(x / aspect, -y / aspect, z);
  }, { pointerEvents: true});

  return (
    <mesh ref={ref} {...drag()} >
      <boxBufferGeometry  args={args} />
      <meshStandardMaterial  color={color} />
    </mesh>
  )
}



export default MoveableBlock;