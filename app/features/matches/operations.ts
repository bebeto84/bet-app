import * as actionMatches from './actions';
import { API_HEADERS, MATCHES_URL } from './../../config/settings';
import { fetchWithDispatchers } from './../../helpers/fetch';

export const fetchMatches = () =>
  fetchWithDispatchers(MATCHES_URL, API_HEADERS, {
    ...actionMatches
  });
