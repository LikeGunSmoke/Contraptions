import React from 'react';
import { useThree } from '@react-three/fiber';
import { useSphere, useBox, usePlane } from '@react-three/cannon';


const Ball = ({args = [0.25, 32, 32], ...props}) => {
  const [ref, api] = useSphere(() => ({args: 0.25, mass: 1, position: [5, 0, 0]}))
  const {viewport} = useThree();

  usePlane(() => ({
    position: [0, -viewport.height,0],
    rotation: [-Math.PI/2, 0, 0],
    onCollide: () => {
      api.position.set(5,0,0)
      api.velocity.set(0,10,0)
    }
  }))

  const [goal] = useBox(() => ({
    ...props,
    onCollide: () => {
    console.log('Winner!!!');
    api.position.set(props)
  }
  }))

  return (
    <>
    <mesh ref={ref}>
      <sphereBufferGeometry position={[-5, -5, 0]} args={args}/>
      <meshStandardMaterial color='white'/>
   </mesh>
   <mesh ref={goal}>
     <boxBufferGeometry args={[1, 1, 1]} />
     <meshStandardMaterial color='red' />
  </mesh>
   </>
  )
};

export default Ball;