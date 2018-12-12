import { TeamState } from './reducer';

export const getTeams = (state: TeamState) =>
  state.allIds.map((id: number) => state.byId[id]);

export const getTeamsById = (state: TeamState) => state.byId;
