import { Action, ActionCreator } from 'redux';
import { DECREMENT, INCREMENT } from './constants';

export const increment: ActionCreator<Action> = () => ({
  type: INCREMENT
});

export const decrement: ActionCreator<Action> = () => ({
  type: DECREMENT
});
