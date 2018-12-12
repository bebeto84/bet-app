import * as React from 'react';
import {
  Header,
  Container,
  Body,
  Title,
  Badge,
  Right,
  Text,
  Footer,
  Left,
  Button,
  Content,
  Icon
} from 'native-base';
import { createStackNavigator } from 'react-navigation';
import { MatchesScreenConnected } from './../matches';

export const MainScreenStack = createStackNavigator(
  {
    Matches: MatchesScreenConnected
  },
  {
    initialRouteName: 'Matches'
  }
);
export const MainScreen = () => (
  <Container>
    <Header>
      <Left>
        <Button transparent={true}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Matches</Title>
      </Body>
      <Right>
        <Badge>
          <Text />
        </Badge>
      </Right>
    </Header>
    <Content />
    <Footer />
  </Container>
);
