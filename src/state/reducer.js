import { combineReducers } from 'redux';
import { POWERUP, SHOWSHROOM, WARP, FIRE_R, FIRE_L, RESET, RESETGAME, WIN, NEXT } from './actions.js';

let initalState = {

  level: [{name: 'level', level: 0}],

  level1: [
    {name: 'mario', size: [0.15, 0.15, 0.15], warp: false, showShroom: false, hideShroom: true},
    {name: 'fireball_r', isVisible: false, shoot: false},
    {name: 'fireball_l', isVisible: false, shoot: false},
    {name: 'reset', reset: false},
    {name: 'win', win: false}
  ],
};

export const levelsReducer = (state = initalState.level, action) => {
  if (action.type === NEXT) {
    return state.map((state) => {
      if (state.name === 'level') {
        return {...state, level: state.level + 1};
      };
      return state;
    });
  };

  return state;

};

export const level1Reducer = (state = initalState.level1, action) => {

  if (action.type === POWERUP) {
    return state.map((state) => {
      if (state.name === 'mario') {
        return {...state, size: [0.3, 0.3, 0.3], showShroom: false, hideShroom: false};
      };
      return state;
    });
  };

  if (action.type === SHOWSHROOM) {
    return state.map((state) => {
      if (state.name === 'mario') {
        return {...state, showShroom: true, hideShroom: false};
      };
      return state;
    });
  };

  if (action.type === FIRE_R) {
    return state.map((state) => {
      if (state.name === 'fireball_r') {
        return {...state, isVisible: true, shoot: true};
      };
      return state;
    });
  };

  if (action.type === FIRE_L) {
    return state.map((state) => {
      if (state.name === 'fireball_l') {
        return {...state, isVisible: true, shoot: true};
      };
      return state;
    })
  };

  if (action.type === WARP) {
    return state.map((state) => {
      if (state.name === 'mario') {
        return {...state, warp: true};
      };
      return state;
    });
  };

  if (action.type === WIN) {
    return state.map((state) => {
      if (state.name === 'win') {
        return {...state, win: true};
      };
      return state;
    });
  };

  if (action.type === RESETGAME) {
    return state.map((state) => {
      if (state.name === 'mario') {
        return {...state, size: [0.15, 0.15, 0.15], warp: false, showShroom: false, hideShroom: true};
      };
      if (state.name === 'fireball_l') {
        return {...state, isVisible: false, shoot: false};
      };
      if (state.name === 'fireball_r') {
        return {...state, isVisible: false, shoot: false};
      };
      if (state.name === 'reset') {
        return {...state, reset: true};
      };
      if (state.name === 'win') {
        return {...state, win: false};
      }
      return state;
    });
  };

  if (action.type === RESET) {
    return state.map((state) => {
      if (state.name === 'reset') {
        return {...state, reset: false};
      };
      return state;
    });
  };

  return state;

};

export const reducer = combineReducers({
  level: levelsReducer,
  level1: level1Reducer,
})