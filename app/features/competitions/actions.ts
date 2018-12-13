import * as competitionConstants from './constants';
import { ActionCreator, Action } from 'redux';
import { normalize } from 'normalizr';
import { competitionsSchema } from './schema';

export const begin: ActionCreator<Action> = () => ({
  type: competitionConstants.FETCH_COMPETITIONS_BEGIN
});

export const success = (data: any) => {
  return {
    data: normalize(data.competitions, competitionsSchema),
    type: competitionConstants.FETCH_COMPETITIONS_SUCCESS
  };
};

export const fail = (error: any) => ({
  type: competitionConstants.FETCH_COMPETITIONS_FAILURE,
  payload: { error }
});
