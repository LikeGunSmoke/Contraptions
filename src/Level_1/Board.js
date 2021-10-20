import React from 'react';
import Brick from './Brick.js';
import QuestionBlock from './QuestionBlock.js';
import WarpPipe from './WarpPipe.js';
import FireFlower from './FireFlower.js';
import Fireball from './Fireball.js';
import RedShell from './RedShell.js';
import Thwomp from './Thwomp.js';
import Castle from './Castle.js';
import Mushroom from './Mushroom.js';
import { useSelector } from 'react-redux';

export default function Board() {

  const isVisible_R = useSelector((state) => state.level1[1].isVisible);
  const isVisible_L = useSelector((state) => state.level1[2].isVisible);

  return (
    <>

      {/* Castle Base  */}
      <Castle position={[-9, 0.7, 0]}  />
      <Brick  position={[-7, 0.7, 0]} />
      <Brick  position={[-8, 0.7, 0]} />
      <Brick  position={[-6, 0.7, 0]} />
      <Brick  position={[-9, 0.7, 0]} />
      <Brick  position={[-10, 0.7, 0]} />

      {/* Castle Wall  */}
      <Brick  position={[-6, 1.7, 0]} />
      <Brick  position={[-6, 2.7, 0]} />
      <Brick  position={[-6, 3.7, 0]} />

      {/* Top Ledge  */}
      <Brick  position={[-5, 3.7, 0]} />
      <Brick  position={[-4, 3.7, 0]} />
      <Brick  position={[-3, 3.7, 0]} />
      <Thwomp rotation={[0, -Math.PI, 0]} />
      <Brick  position={[-2, 3.7, 0]} />
      <Brick  position={[-1, 3.7, 0]} />
      <QuestionBlock position={[0, 3.1, 0]} />
      <Brick  position={[1, 3.7, 0]} />
      <Brick  position={[2, 3.7, 0]} />
      <Brick  position={[3, 3.7, 0]} />
      <Brick  position={[4, 3.7, 0]} />
      <Brick  position={[5, 3.7, 0]} />
      <Brick  position={[6, 3.7, 0]} />
      <Brick  position={[7, 3.7, 0]} />
      <Brick  position={[8, 3.7, 0]} />
      <Brick  position={[9, 3.7, 0]} />
      <Brick  position={[10, 3.7, 0]} />
      <Brick  position={[11, 3.7, 0]} />
      <Brick  position={[12, 3.7, 0]} />
      <Brick position={[13, 3.7, 0]} />
      <Brick position={[13, 4.7, 0]} />
      <Brick position={[13, 5.7, 0]} />
      <FireFlower position={[13, 6.3, 0]} direction={'right'} />
      <Fireball position={[13, 7, 0]} direction={'right'} visibillity={isVisible_R} />
      <WarpPipe position={[11, 4.5, 0]} scale={[0.006, 0.006, 0.006]} />

      {/* Mario Ledge  */}
      <Brick  position={[-13, -6, 0]} />
      <Brick  position={[-12, -6, 0]} />
      <Brick position={[-11, -6, 0]} vanish={true} pos={'first'} />
      <Brick position={[-10, -6, 0]} vanish={true} pos={'second'} />
      <Brick position={[-9, -6, 0]} vanish={true} pos={'third'} />

      {/* Bottom Ledge  */}
      <Brick  position={[-3, -9, 0]} />
      <QuestionBlock position={[-4, -9.6, 0]} powerUp={true} />
      <Mushroom position={[-4, -10, 0]} />
      <Brick  position={[-5, -9, 0]} />
      <Brick  position={[-6, -9, 0]} />
      <Brick  position={[-7, -9, 0]} />
      <Brick  position={[-8, -9, 0]} />
      <Brick  position={[-9, -9, 0]} />
      <Brick  position={[-10, -9, 0]} />
      <Brick  position={[-11, -9, 0]} />
      <Brick  position={[-10, -9, 0]} />
      <WarpPipe position={[-1.5, -10, 0]} scale={[0.0065, 0.0065, 0.0065]} />
      <RedShell scale={[0.005, 0.005, 0.005]} />
      <Brick  position={[0, -9, 0]} />
      <Brick  position={[1, -9, 0]} />
      <Brick  position={[2, -9, 0]} />
      <Brick  position={[3, -9, 0]} />
      <Brick  position={[4, -9, 0]} />
      <Brick  position={[5, -9, 0]} />
      <Brick  position={[6, -9, 0]} />
      <FireFlower position={[-10.5, -8.5 ,0]} direction={'left'} />
      <Fireball position={[-10.5, -7.5, 0]} direction={'left'} visibillity={isVisible_L} />

    </>
  );
};