import * as React from 'react';
import { shallow } from 'enzyme';
import { CounterScreen } from '../';

let navigation: any;

beforeEach(() => {
  navigation = { navigate: jest.fn() };
});

it('renders correctly', () => {
  const screen = shallow(<CounterScreen count={1} navigation={navigation} />);
  expect(screen).toMatchSnapshot();
});
