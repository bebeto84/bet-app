import { MatchesScreenConnected } from './../screens/matches';
import * as modalScreens from './../screens/modals';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { CompetitionsScreenConnected } from './../screens/competitions/CompetitionsScreen.Connected';

const Drawer = createDrawerNavigator({
  Matches: MatchesScreenConnected,
  Competitions: CompetitionsScreenConnected
});

export const RootStack = createStackNavigator(
  {
    Main: {
      screen: Drawer
    },
    ...modalScreens
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);
