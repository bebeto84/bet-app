import * as React from 'react';
import {
  createAppContainer,
  NavigationScreenProp,
  createDrawerNavigator
} from 'react-navigation';
import { Provider } from 'react-redux';
import { configureStore } from './store/store';
import { MatchesScreenConnected } from './screens/matches';

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
const RootDrawer = createDrawerNavigator({ Matches: MatchesScreenConnected });
/* const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    // Counter: CounterScreenConnected,
    Matches: MatchesScreenConnected
  },
  {
    initialRouteName: 'Home'
  }
); */

const AppContainer = createAppContainer(RootDrawer);

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
