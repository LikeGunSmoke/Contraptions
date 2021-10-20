import React from 'react';
import { useDispatch } from 'react-redux';
import { resetGame, reset } from '../state/actions.js';
import img from './images/restart.svg';

export default function RestartBtn({ ...props }) {

  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(resetGame);
    setTimeout(() => dispatch(reset), 10);
  };

  return (
    <div style={{position: 'absolute', top: '2vh', left: '2vw', zIndex: 2}}>
      <img src={img} alt='restart button' onClick={onClick} />
    </div>
  );
};
