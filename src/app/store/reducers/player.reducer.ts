import { PlayerStoreActions, PlayerActionTypes } from '../actions';

export interface Player {

}
export interface State {
  player: Player;
  players: Player[]
  loading: boolean;
  hasPlayersLoaded: boolean;
}

export const initialState: State = {
  player: {},
  players: [],
  loading: true,
  hasPlayersLoaded: false
};

export function reducer(state = initialState, action: PlayerStoreActions.PlayerActions): State {
  switch (action.type) {
    case PlayerActionTypes.LOAD_PLAYERS:
      return { ...state, loading: true };
    case PlayerActionTypes.LOAD_PLAYERS_SUCCESS:
      return { ...state, loading: false, players: action.payload };
    case PlayerActionTypes.LOAD_PLAYERS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export const getPlayers = (state: State) => state.players;
export const hasPlayersLoaded = (state: State) => state.hasPlayersLoaded;