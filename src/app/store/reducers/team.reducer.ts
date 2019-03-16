import { Team, TeamConfig } from 'src/app/shared/models/team.model';
import { TeamStoreActions, TeamActionTypes } from '../actions';

export interface State {
  team?: Team;
  teams: Team[]
  hasTeamsLoaded: boolean;
  teamConfig?: TeamConfig;
  hasTeamConfigLoaded: boolean;
}

export const initialState: State = {
  team: null,
  teams: [],
  hasTeamsLoaded: false,
  teamConfig: null,
  hasTeamConfigLoaded: false
};

export function reducer(state = initialState, action: TeamStoreActions.TeamActions): State {
  switch (action.type) {
    case TeamActionTypes.LOAD_TEAMS:
      return { ...state};
    case TeamActionTypes.LOAD_TEAMS_SUCCESS:
      return { ...state, teams: action.payload, hasTeamsLoaded: true };
    case TeamActionTypes.LOAD_TEAMS_FAILURE:
      return { ...state };
    case TeamActionTypes.LOAD_TEAM_CONFIG:
      return { ...state, hasTeamConfigLoaded: false };
    case TeamActionTypes.LOAD_TEAM_CONFIG_SUCCESS:
      return { ...state, teamConfig: action.payload, hasTeamConfigLoaded: true };
    case TeamActionTypes.LOAD_TEAM_CONFIG_FAILURE:
      return { ...state };
    default:
      return state;
  }
}

export const getTeams = (state: State) => state.teams;
export const getTeamConfig = (state: State) => state.teamConfig;
export const hasTeamsLoaded = (state: State) => state.hasTeamsLoaded;
export const hasTeamConfigLoaded = (state: State) => state.hasTeamConfigLoaded;
