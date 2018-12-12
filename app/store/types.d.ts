import { StateType } from 'typesafe-actions';
import rootReducer from './root-reducer';
import { CounterAction } from '../features/counter';

declare module 'Types' {
  export type AppState = StateType<typeof rootReducer>;
  export type AppAction = CounterAction;
}
