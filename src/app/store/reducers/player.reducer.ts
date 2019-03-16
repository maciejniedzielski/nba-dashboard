import { PlayerStoreActions, PlayerActionTypes } from '../actions';

export interface Player {

}
export interface State {
  player?: Player;
  players: Player[]
  hasPlayersLoaded: boolean;
  hasPlayerLoaded: boolean;
}

export const initialState: State = {
  player: null,
  players: [],
  hasPlayersLoaded: false,
  hasPlayerLoaded: false
};

export function reducer(state = initialState, action: PlayerStoreActions.PlayerActions): State {
  switch (action.type) {
    case PlayerActionTypes.LOAD_PLAYERS:
      return { ...state };
    case PlayerActionTypes.LOAD_PLAYERS_SUCCESS:
      return { ...state, players: action.payload, hasPlayersLoaded: true };
    case PlayerActionTypes.LOAD_PLAYERS_FAILURE:
      return { ...state };
    case PlayerActionTypes.LOAD_PLAYER:
      return { ...state, hasPlayerLoaded: false };
    case PlayerActionTypes.LOAD_PLAYER_SUCCESS:
      return { ...state, player: action.payload, hasPlayerLoaded: true };
    case PlayerActionTypes.LOAD_PLAYER_FAILURE:
      return { ...state };
    default:
      return state;
  }
}

export const getPlayers = (state: State) => state.players;
export const getPlayer = (state: State) => state.player;
export const hasPlayersLoaded = (state: State) => state.hasPlayersLoaded;
export const hasPlayerLoaded = (state: State) => state.hasPlayerLoaded;