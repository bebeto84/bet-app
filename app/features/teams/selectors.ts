import { TeamState } from './reducer';
import { MatchProps } from './../../components/Match';

export const getTeams = (state: TeamState) =>
  state.allIds.map((id: number) => state.byId[id]);

export const getTeamsById = (state: TeamState) => state.byId;
export const getTeamById: any = (teams: any, match: MatchProps) => {
  return {
    homeTeam: teams[match.homeTeam],
    awayTeam: teams[match.awayTeam]
  };
};
