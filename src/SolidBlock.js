import React from 'react';
import { useThree } from '@react-three/fiber';
import { useBox } from '@react-three/cannon';


const SolidBlock = ({ args, color, ...props }) => {

  const {viewport} = useThree();
  const [ref, api] = useBox(() => ({args, ...props}))

  return (
  <mesh ref={ref}>
    <boxBufferGeometry args={args}/>
    <meshStandardMaterial color={color}/>
  </mesh>
  )
};


export default SolidBlock;