import { ActionType } from 'typesafe-actions';
import * as teamActions from './actions';
import { combineReducers } from 'redux';
import * as teamConstants from './constants';

export type TeamAction = ActionType<typeof teamActions>;

export type TeamState = {
  readonly byId: any;
  readonly allIds: number[];
};

export const teamReducer = combineReducers<TeamState, TeamAction>({
  byId: (state = {}, action: any) => {
    switch (action.type) {
      case teamConstants.FETCH_TEAMS_BEGIN:
      case teamConstants.FETCH_TEAMS_FAILURE:
        return [];
      case teamConstants.FETCH_TEAMS_SUCCESS:
        return { ...action.data.entities.teams };
      default:
        return state;
    }
  },
  allIds: (state = [], action: any) => {
    switch (action.type) {
      case teamConstants.FETCH_TEAMS_SUCCESS:
        return [...action.data.result];
      default:
        return state;
    }
  }
});
