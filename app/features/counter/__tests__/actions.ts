import { decrement, increment } from '../actions';
import { DECREMENT, INCREMENT } from '../constants';

it('increment should return an action to increment the count', () => {
  expect(increment()).toEqual({
    type: INCREMENT
  });
});

it('decrement should return an action to decrement the count', () => {
  expect(decrement()).toEqual({
    type: DECREMENT
  });
});
