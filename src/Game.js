import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';

import Ball from './Ball.js';
import SolidBlock from './SolidBlock.js';
import MoveableBlock from './MoveableBlock.js';
import MovingRedShell from './MovingRedShell.js';
import MovingThwomp from './MovingThwomp.js';


const Game = () => {
  return (
    <Canvas style={{height: '100vh', width: '100vw', margin: 0}} camera={{position: [0, 2, 10], fov: 80}}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, -5]} />
      <Physics
        gravity={[0, -30, 0]}
        defaultContactMaterial={{restitution: 1.1}}
      >
        <Ball position={[-7, 2.5, 0]}/>
        <SolidBlock color='yellow' args={[1, 2, 1]} position={[-5.5, 2.55, 0]} />
        <SolidBlock color='yellow' args={[2, 0.5, 1]} position={[-7, 1.8, 0]} />
        <SolidBlock color='yellow' args={[2, 0.5, 1]} position={[-4, 4, 0]} />
        <SolidBlock color='yellow' args={[2, 0.5, 1]} position={[0, 4, 0]} />
        <MoveableBlock dim={[2, 1, 1]} args={[4, 2, 1]} color='blue' position={[5, 5, 0]}/>
        <MoveableBlock dim={[1, 1, 1]} args={[1, 1, 1]} color='blue' position={[5, -5, 0]}/>
        <MovingRedShell />
        <MovingThwomp />
      </Physics>
    </Canvas>
  );
}

export default Game;
