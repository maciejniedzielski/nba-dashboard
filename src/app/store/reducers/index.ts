import * as Team from './team.reducer';
import * as Player from './player.reducer';
import * as Standings from './standings.reducer';

import { createSelector } from '@ngrx/store';

export namespace CoreReducer {
  export interface State {
    team: Team.State;
    player: Player.State;
    standings: Standings.State
  }

  export const fromTeam = Team;
  export const fromPlayer = Player;
  export const fromStandings = Standings;

  export const getTeamState = (state: State) => state.team;
  export const getTeams = createSelector(getTeamState, fromTeam.getTeams);
  export const getTeamConfig = createSelector(getTeamState, fromTeam.getTeamConfig);
  export const hasTeamsLoaded = createSelector(getTeamState, fromTeam.hasTeamsLoaded);
  export const hasTeamConfigLoaded = createSelector(getTeamState, fromTeam.hasTeamConfigLoaded);

  
  export const getPlayerState = (state: State) => state.player;
  export const getPlayers = createSelector(getPlayerState, fromPlayer.getPlayers);
  export const getPlayer = createSelector(getPlayerState, fromPlayer.getPlayer);
  export const getPlayerStats = createSelector(getPlayerState, fromPlayer.getPlayerStats);
  export const hasPlayersLoaded = createSelector(getPlayerState, fromPlayer.hasPlayersLoaded);
  export const hasPlayerLoaded = createSelector(getPlayerState, fromPlayer.hasPlayerLoaded);

  export const getStandingsState = (state: State) => state.standings;
  export const getSelectedConference = createSelector(getStandingsState, fromStandings.getSelectedConference);
}
