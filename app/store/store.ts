import { applyMiddleware, createStore, Store } from 'redux';
import reduxThunk from 'redux-thunk';
import { Types } from 'Types';
import rootReducer from './root-reducer';

export function configureStore(preloadedState?: object): Store<Types.AppState> {
  const middleware = [reduxThunk];
  const middlewareEnhancer = applyMiddleware(...middleware);

  return createStore(rootReducer, preloadedState!, middlewareEnhancer);
}
