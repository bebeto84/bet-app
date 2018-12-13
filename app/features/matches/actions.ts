import * as matchesConstants from './constants';
import { ActionCreator, Action } from 'redux';
import { normalize } from 'normalizr';
import { matchesSchema } from './schema';

export const begin: ActionCreator<Action> = () => ({
  type: matchesConstants.FETCH_MATCHES_BEGIN
});

export const success = (data: any) => {
  return {
    data: normalize(data.matches, matchesSchema),
    type: matchesConstants.FETCH_MATCHES_SUCCESS
  };
};

export const fail = (error: any) => ({
  type: matchesConstants.FETCH_MATCHES_FAILURE,
  payload: { error }
});
