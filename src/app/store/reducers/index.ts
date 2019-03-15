import * as Team from './team.reducer';
import * as Player from './player.reducer';

import { createSelector } from '@ngrx/store';

export namespace CoreReducer {
  export interface State {
    team: Team.State;
    player: Player.State;
  }

  export const fromTeam = Team;
  export const fromPlayer = Player;

  export const getTeamState = (state: State) => state.team;
  export const getTeams = createSelector(getTeamState, fromTeam.getTeams);
  export const hasTeamsLoaded = createSelector(getTeamState, fromTeam.hasTeamsLoaded);

  export const getPlayerState = (state: State) => state.player;
  export const getPlayers = createSelector(getPlayerState, fromPlayer.getPlayers);
  export const hasPlayersLoaded = createSelector(getPlayerState, fromPlayer.hasPlayersLoaded);

}
