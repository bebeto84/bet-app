import * as React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'native-base';
import { Counter } from '../Counter';

it('renders correctly with defaults', () => {
  const counter = shallow(<Counter count={10} />);
  expect(counter).toMatchSnapshot();
});

it('calls the onIncrement handler when the + button is pressed', () => {
  const onIncrement = jest.fn();
  const counter = shallow(<Counter count={10} onIncrement={onIncrement} />);
  counter
    .find(Button)
    .at(1)
    .simulate('press');
  expect(onIncrement).toHaveBeenCalledTimes(1);
});

it('calls the onDecrement handler when the - button is pressed', () => {
  const onDecrement = jest.fn();
  const counter = shallow(<Counter count={10} onDecrement={onDecrement} />);
  counter
    .find(Button)
    .at(0)
    .simulate('press');
  expect(onDecrement).toHaveBeenCalledTimes(1);
});
