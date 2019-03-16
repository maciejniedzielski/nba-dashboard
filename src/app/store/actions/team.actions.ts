import { Action } from '@ngrx/store';
import { Team, TeamConfig } from 'src/app/shared/models/team.model';

export enum TeamActionTypes {
  LOAD_TEAMS = '[Team] Load teams',
  LOAD_TEAMS_SUCCESS = '[Team] Load teams success!',
  LOAD_TEAMS_FAILURE = '[Team] Load teams failure!',
  LOAD_TEAM_CONFIG = '[Team] Load team config',
  LOAD_TEAM_CONFIG_SUCCESS = '[Team] Load team config success!',
  LOAD_TEAM_CONFIG_FAILURE = '[Team] Load team config failure!'
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

  export class LoadTeamConfig implements Action {
    readonly type = TeamActionTypes.LOAD_TEAM_CONFIG;

    constructor(public payload: string) {}
  }

  export class LoadTeamConfigSuccess implements Action {
    readonly type = TeamActionTypes.LOAD_TEAM_CONFIG_SUCCESS;

    constructor(public payload: TeamConfig) {}
  }

  export class LoadTeamConfigFailure implements Action {
    readonly type = TeamActionTypes.LOAD_TEAM_CONFIG_FAILURE;

    constructor(public payload: TeamConfig) {}
  }

  export type TeamActions = LoadTeams
    | LoadTeamsSuccess
    | LoadTeamsFailure
    | LoadTeamConfig
    | LoadTeamConfigSuccess
    | LoadTeamConfigFailure;
}
