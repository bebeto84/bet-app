import { MatchesState } from './reducer';

export const getMatches = (state: MatchesState) =>
  state.allIds.map((id: number) => state.byId[id]);

// export const getTeams = (matchState: MatchesState) => matchState.teams;
