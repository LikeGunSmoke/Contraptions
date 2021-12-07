import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import Board from './Board.js';
import Mario from './Mario.js';
import Background from './Background.js';
import Ground from './Ground.js';
import RestartBtn from './RestartBtn.js';
import Start from './Start.js';
import Tutorial from './Tutorial.js';
import Win from './Win.js';
import SpeechBubble from './SpeechBubble.js';
import { store } from '../state/store.js';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { disableBubble } from '../state/actions/level_1/actions.js';

export default function Level_1() {

  const dispatch = useDispatch();
  const winCondition = useSelector((state) => state.level1[4].win);
  const tutorial = useSelector((state) => state.level1[5].tutorial);
  const speechBubble = useSelector((state) => state.level1[6].speechBubble)
  const [start, setStart] = useState(true);
  const [win, setWin] = useState(false);
  const [speech, setSpeech] = useState(false)

  useEffect(() => {
    if (winCondition) {
      setWin(true);
    };
    if (speechBubble) {
      setSpeech(true);
      setTimeout(() => {
        dispatch(disableBubble);
        setSpeech(false);
      }, 5000)
    }
  }, [winCondition, speechBubble, dispatch]);

  return (
    <>
      <Provider store={store}>
        {start && <Start onClick={() => setStart(false)}/>}
        {win && <Win />}
        {speech && <SpeechBubble />}
        {!start && tutorial && <Tutorial />}
        <RestartBtn />
        <Canvas
          style={{height: '100vh', width: '100%', margin: 0}}
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