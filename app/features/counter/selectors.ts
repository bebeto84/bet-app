import { CounterState } from './reducer';

export const getCount = (counterState: CounterState) => counterState.count;
