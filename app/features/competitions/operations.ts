import * as competitionActions from './actions';
import { API_HEADERS, COMPETITIONS_URL } from './../../config/settings';
import { fetchWithDispatchers } from './../../helpers/fetch';

export const fetchCompetitions = () =>
  fetchWithDispatchers(COMPETITIONS_URL, API_HEADERS, {
    ...competitionActions
  });
