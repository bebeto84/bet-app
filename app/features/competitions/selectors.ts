import { CompetitionState } from './reducer';

export const getCompetitions = (state: CompetitionState) =>
  state.allIds.map((id: number) => state.byId[id]);

export const getCompetitionsById = (state: CompetitionState) => state.byId;
