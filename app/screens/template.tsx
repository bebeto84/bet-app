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
import {
  NavigationScreenProps,
  NavigationScreenProp,
  NavigationRoute
} from 'react-navigation';

const navigateToRoute = (navigation: NavigationScreenProp<NavigationRoute>) => {
  return navigation.toggleDrawer();
};
export const getTemplate = (
  props: NavigationScreenProps,
  container: React.ReactNode
) => (
  <Container>
    <Header>
      <Left>
        <Button
          transparent={true}
          onPress={() => navigateToRoute(props.navigation)}
        >
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>{props.navigation.state.routeName}</Title>
      </Body>
      <Right>
        <Badge>
          <Text />
        </Badge>
      </Right>
    </Header>
    <Content>{container}</Content>
    <Footer />
  </Container>
);
