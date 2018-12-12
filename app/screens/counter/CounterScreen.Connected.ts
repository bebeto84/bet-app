import { connect } from 'react-redux';
import Types from 'Types';
import * as counterActions from '../../features/counter/actions';
import { getCount } from '../../features/counter/selectors';
import { CounterScreen } from './CounterScreen';

const mapStateToProps = (state: Types.AppState) => ({
  count: getCount(state.counter)
});

const mapDispatchToProps = {
  onIncrement: counterActions.increment,
  onDecrement: counterActions.decrement
};

export const CounterScreenConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterScreen);
