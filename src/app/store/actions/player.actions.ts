import { Action } from '@ngrx/store';
import { Player } from '../reducers/player.reducer';

export enum PlayerActionTypes {
  LOAD_PLAYERS = '[Player] Load players',
  LOAD_PLAYERS_SUCCESS = '[Player] Load players success!',
  LOAD_PLAYERS_FAILURE = '[Player] Load players failure!'
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

  export type PlayerActions = LoadPlayers
    | LoadPlayersSuccess
    | LoadPlayersFailure;
}
