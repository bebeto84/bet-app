import * as React from 'react';
import {
  createAppContainer,
  NavigationScreenProp,
  createDrawerNavigator,
  createStackNavigator
} from 'react-navigation';
import { Provider } from 'react-redux';
import { configureStore } from './store/store';

import { MatchesScreenConnected } from './screens/matches';
import { View, Button, Text } from 'react-native';

export interface HomeScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

/* class HomeScreen extends React.Component<HomeScreenProps> {
  navigateToCounter = () => this.props.navigation.navigate('Counter');
  navigateToMatches = () => this.props.navigation.navigate('Matches');

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="Go to Matches" onPress={this.navigateToMatches} />
      </View>
    );
  }
}
 */

class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

const Drawer = createDrawerNavigator({ Matches: MatchesScreenConnected });

const RootStack = createStackNavigator(
  {
    Main: {
      screen: Drawer
    },
    ModalScreen: {
      screen: ModalScreen
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(RootStack);

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
