import { Action } from '@ngrx/store';
import { Team } from 'src/app/shared/models/team.model';

export enum TeamActionTypes {
  LOAD_TEAMS = '[Team] Load teams',
  LOAD_TEAMS_SUCCESS = '[Team] Load teams success!',
  LOAD_TEAMS_FAILURE = '[Team] Load teams failure!'
}

export namespace TeamStoreActions {

  export class LoadTeams implements Action {
    readonly type = TeamActionTypes.LOAD_TEAMS;
  }

  export class LoadTeamsSuccess implements Action {
    readonly type = TeamActionTypes.LOAD_TEAMS_SUCCESS;

    constructor(public payload: Team[]) {}
  }

  export class LoadTeamsFailure implements Action {
    readonly type = TeamActionTypes.LOAD_TEAMS_FAILURE;
  }

  export type TeamActions = LoadTeams
    | LoadTeamsSuccess
    | LoadTeamsFailure;
}
