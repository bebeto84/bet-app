import * as teamConstants from './constants';
import { ActionCreator, Action } from 'redux';
import { normalize } from 'normalizr';
import { teamsSchema } from './schema';

export const begin: ActionCreator<Action> = () => ({
  type: teamConstants.FETCH_TEAMS_BEGIN
});

export const success = (data: any) => {
  return {
    data: normalize(data.teams, teamsSchema),
    type: teamConstants.FETCH_TEAMS_SUCCESS
  };
};

export const fail = (error: any) => ({
  type: teamConstants.FETCH_TEAMS_FAILURE,
  payload: { error }
});
