import { initialState } from './initialState.js';

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;

    case 'DECREASE':
      return state - 1;

    case 'SET_NUMBER':
      return action.payload;

    default:
      return state;
  }
};
