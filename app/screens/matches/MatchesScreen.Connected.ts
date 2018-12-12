import { connect } from 'react-redux';
import Types from 'Types';
import { getMatches } from './../../features/matches/selectors';
import { MatchesScreen } from './MatchesScreen';
import { getTeamsById } from './../../features/teams/selectors';
import { fetchMatches } from './../../features/matches/operations';
import { fetchTeams } from './../../features/teams/operations';

const mapStateToProps = (state: Types.AppState) => ({
  matches: getMatches(state.matches),
  teams: getTeamsById(state.teams)
});

const mapDispatchToProps = (dispatch: any) => ({
  init: () => {
    dispatch(fetchMatches()), dispatch(fetchTeams());
  }
});

export const MatchesScreenConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchesScreen);
