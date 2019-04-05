import { Action } from '@ngrx/store';
import { Player } from '../reducers/player.reducer';

export enum PlayerActionTypes {
  LOAD_PLAYERS = '[Player] Load players',
  LOAD_PLAYERS_SUCCESS = '[Player] Load players success!',
  LOAD_PLAYERS_FAILURE = '[Player] Load players failure!',
  LOAD_PLAYER = '[Player] Load player data',
  LOAD_PLAYER_SUCCESS = '[Player] Load player data success!',
  LOAD_PLAYER_FAILURE = '[Player] Load player data failure!',
  LOAD_PLAYER_STATS = '[Player] Load player data',
  LOAD_PLAYER_STATS_SUCCESS = '[Player] Load player stats success!',
  LOAD_PLAYER_STATS_FAILURE = '[Player] Load player stats failure!',
}

export namespace PlayerStoreActions {
  export class LoadPlayers implements Action {
    readonly type = PlayerActionTypes.LOAD_PLAYERS;
  }

  export class LoadPlayersSuccess implements Action {
    readonly type = PlayerActionTypes.LOAD_PLAYERS_SUCCESS;

    constructor(public payload: Player[]) {}
  }

  export class LoadPlayersFailure implements Action {
    readonly type = PlayerActionTypes.LOAD_PLAYERS_FAILURE;
  }

  export class LoadPlayer implements Action {
    readonly type = PlayerActionTypes.LOAD_PLAYER;

    constructor(public payload: number) {}
  }

  export class LoadPlayerSuccess implements Action {
    readonly type = PlayerActionTypes.LOAD_PLAYER_SUCCESS;

    constructor(public payload: Player) {}
  }

  export class LoadPlayerFailure implements Action {
    readonly type = PlayerActionTypes.LOAD_PLAYER_FAILURE;
  }
  
  export class LoadPlayerStats implements Action {
    readonly type = PlayerActionTypes.LOAD_PLAYER_STATS;

    constructor(public payload: number) {}
  }

  export class LoadPlayerStatsSuccess implements Action {
    readonly type = PlayerActionTypes.LOAD_PLAYER_STATS_SUCCESS;

    constructor(public payload: any) {}
  }

  export class LoadPlayerStatsFailure implements Action {
    readonly type = PlayerActionTypes.LOAD_PLAYER_STATS_FAILURE;
  }

  export type PlayerActions = LoadPlayers
    | LoadPlayersSuccess
    | LoadPlayersFailure
    | LoadPlayer
    | LoadPlayerSuccess
    | LoadPlayerFailure
    | LoadPlayerStats
    | LoadPlayerStatsSuccess
    | LoadPlayerStatsFailure;
}
