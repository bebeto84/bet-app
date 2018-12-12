export interface TeamProps {
  id: number;
  name: string;
  crestUrl: string;
}

export interface MatchProps {
  id: number;
  status: string;
  homeTeam: number;
  awayTeam: number;
  utcDate: string;
  score: any;
  onScore?: () => any;
}

export interface MatchScreenProps {
  match: MatchProps;
  homeTeam: TeamProps;
  awayTeam: TeamProps;
}
