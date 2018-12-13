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

export const getTemplate = (
  props: NavigationScreenProps,
  container: React.ReactNode
) => {
  const onPressBurguerMenu = () => {
    props.navigation.toggleDrawer();
  };
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent={true} onPress={onPressBurguerMenu}>
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
};
