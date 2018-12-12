import { ActionType } from 'typesafe-actions';
import * as matchActions from './actions';
import { combineReducers } from 'redux';
import * as matchConstants from './constants';

export type MatchAction = ActionType<typeof matchActions>;

export type MatchesState = {
  readonly byId: any;
  readonly allIds: number[];
};

export const matchReducer = combineReducers<MatchesState, MatchAction>({
  byId: (state = {}, action: any) => {
    switch (action.type) {
      case matchConstants.FETCH_MATCHES_BEGIN:
      case matchConstants.FETCH_MATCHES_FAILURE:
        return [];
      case matchConstants.FETCH_MATCHES_SUCCESS:
        return { ...action.data.entities.matches };
      default:
        return state;
    }
  },
  allIds: (state = [], action: any) => {
    switch (action.type) {
      case matchConstants.FETCH_MATCHES_SUCCESS:
        return [...action.data.result];
      default:
        return state;
    }
  }
});
