import { DECREMENT, INCREMENT } from '../constants';
import { counterReducer } from '../reducer';

it('should return the initial state', () => {
  expect(counterReducer(undefined, { type: '' })).toEqual({
    count: 0
  });
});

it('should handle the counter/INCREMENT action', () => {
  expect(counterReducer({ count: 0 }, { type: INCREMENT })).toEqual({
    count: 1
  });
});

it('should handle the counter/DECREMENT action', () => {
  expect(counterReducer({ count: 0 }, { type: DECREMENT })).toEqual({
    count: -1
  });
});
