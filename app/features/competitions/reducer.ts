import { ActionType } from 'typesafe-actions';
import * as competitionActions from './actions';
import { combineReducers } from 'redux';
import * as competitionConstants from './constants';

export type CompetitionAction = ActionType<typeof competitionActions>;

export type CompetitionState = {
  readonly byId: any;
  readonly allIds: number[];
};

export const competitionReducer = combineReducers<
  CompetitionState,
  CompetitionAction
>({
  byId: (state = {}, action: any) => {
    switch (action.type) {
      case competitionConstants.FETCH_COMPETITIONS_BEGIN:
      case competitionConstants.FETCH_COMPETITIONS_FAILURE:
        return [];
      case competitionConstants.FETCH_COMPETITIONS_SUCCESS:
        return { ...action.data.entities.competitions };
      default:
        return state;
    }
  },
  allIds: (state = [], action: any) => {
    switch (action.type) {
      case competitionConstants.FETCH_COMPETITIONS_SUCCESS:
        return [...action.data.result];
      default:
        return state;
    }
  }
});
