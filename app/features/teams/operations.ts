import * as teamActions from './actions';
import { API_HEADERS, TEAMS_URL } from './../../config/settings';
import { fetchWithDispatchers } from './../../helpers/fetch';

export const fetchTeams = () =>
  fetchWithDispatchers(TEAMS_URL, API_HEADERS, {
    ...teamActions
  });
