import { TeamProps } from './../components/Match';

export interface MatchState
  extends Readonly<{
    id: number;
    status: string;
    homeTeam: TeamProps;
    awayTeam: TeamProps;
    utcDate: string;
    score: any;
  }> {}
