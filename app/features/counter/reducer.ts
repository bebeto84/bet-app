import { Action, combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as counterActions from './actions';
import { DECREMENT, INCREMENT } from './constants';

export type CounterAction = ActionType<typeof counterActions>;

export type CounterState = {
  readonly count: number;
};

export const counterReducer = combineReducers<CounterState, Action>({
  count: (state = 0, action) => {
    switch (action.type) {
      case INCREMENT:
        return state + 1;
      case DECREMENT:
        return state - 1;
      default:
        return state;
    }
  }
});
