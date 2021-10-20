import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import Board from './Board.js';
import Mario from './Mario.js';
import Background from './Background.js';
import Ground from './Ground.js';
import RestartBtn from './RestartBtn.js';
import Start from './Start.js';
import Win from './Win.js';
import SpeechBubble from './SpeechBubble.js';
import { store } from '../state/store.js';
import { Provider, useSelector } from 'react-redux';

export default function Level_1() {

  const winCondition = useSelector((state) => state.level1[4].win);
  const [start, setStart] = useState(true);
  const [win, setWin] = useState(false);
  const [speech, setSpeech] = useState(false);


  useEffect(() => {
    if (winCondition) {
      setWin(true);
    }
  }, [winCondition]);

  const handleStart = () => {
    setStart(false);
    setSpeech(true);
    setTimeout(() => {
      setSpeech(false)
    }, 5000)
  };

  return (
    <>
      <Provider store={store}>
        {start && <Start onClick={handleStart}/>}
        {win && <Win />}
        {speech && <SpeechBubble />}
        <RestartBtn />
        <Canvas
          style={{height: '100vh', width: '100vw', margin: 0}}
          camera={{position: [0, 0, 15], fov: 80}}
        >
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 5]} />
          <pointLight position={[-10, -10, -5]} />

          <Physics
            gravity={[0, -30, 0]}
            defaultContactMaterial={{restitution: 0.1}}
          >

            <Provider store={store}>
              <Mario />
              <Board />
              <Background  />
              <Ground />
            </Provider>

          </Physics>
        </Canvas>
      </Provider>
    </>
  );
};