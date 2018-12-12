import * as React from 'react';
import { Container, Button, Text } from 'native-base';

export interface CounterProps {
  count: number;
  onDecrement?: () => any;
  onIncrement?: () => any;
}

export const Counter: React.FunctionComponent<CounterProps> = (
  props: CounterProps
) => (
  <Container>
    <Button small={true} onPress={props.onDecrement}>
      <Text>-</Text>
    </Button>
    <Text>{props.count}</Text>
    <Button small={true} onPress={props.onIncrement}>
      <Text>+</Text>
    </Button>
  </Container>
);

Counter.defaultProps = {
  onDecrement: () => {},
  onIncrement: () => {}
};
