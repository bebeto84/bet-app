import { combineReducers } from 'redux';
import { counterReducer } from '../features/counter';
import { matchReducer } from '../features/matches';
import { teamReducer } from '../features/teams/reducer';
import { competitionReducer } from '../features/competitions/reducer';

export default combineReducers({
  counter: counterReducer,
  // bets: betReducer,
  matches: matchReducer,
  teams: teamReducer,
  competitions: competitionReducer
});
