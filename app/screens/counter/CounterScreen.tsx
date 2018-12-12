import * as React from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { Counter, CounterProps } from '../../components/Counter';

export interface CounterScreenProps extends CounterProps {
  navigation: NavigationScreenProp<any, any>;
}

export const CounterScreen = (props: CounterScreenProps) => (
  <Counter
    count={props.count}
    onIncrement={props.onIncrement}
    onDecrement={props.onDecrement}
  />
);
