const API_TOKEN = 'e016a6ec96474f95b70f1094834663db';

export const API_HEADERS = {
  'X-Auth-Token': API_TOKEN
};

export const MATCHES_URL: string =
  'https://api.football-data.org/v2/matches?competitions=2014&dateFrom=2018-11-29&dateTo=2018-12-08';
export const TEAMS_URL: string =
  'https://api.football-data.org/v2/competitions/2014/teams';
