import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { configureStore } from './store/store';
import { RootStack } from './config/routes';

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
