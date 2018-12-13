import { connect } from 'react-redux';
import Types from 'Types';
import { getCompetitions } from './../../features/competitions/selectors';
import { fetchCompetitions } from './../../features/competitions/operations';
import { CompetitionsScreen } from './CompetitionsScreen';

const mapStateToProps = (state: Types.AppState) => ({
  competitions: getCompetitions(state.competitions)
});

const mapDispatchToProps = (dispatch: any) => ({
  init: () => {
    dispatch(fetchCompetitions());
  }
});
export const CompetitionsScreenConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(CompetitionsScreen);
