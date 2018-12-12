import { getCount } from '../selectors';

describe('getCount', () => {
  it('returns the count property from a CounterState', () => {
    expect(getCount({ count: 1 })).toEqual(1);
  });
});
