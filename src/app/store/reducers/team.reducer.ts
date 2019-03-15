import { Team } from 'src/app/shared/models/team.model';
import { TeamStoreActions, TeamActionTypes } from '../actions';

export interface State {
  team: Team | null;
  teams: Team[]
  loading: boolean;
  hasTeamsLoaded: boolean;
}

export const initialState: State = {
  team: null,
  teams: [],
  loading: true,
  hasTeamsLoaded: false
};

export function reducer(state = initialState, action: TeamStoreActions.TeamActions): State {
  switch (action.type) {
    case TeamActionTypes.LOAD_TEAMS:
      return { ...state, loading: true };
    case TeamActionTypes.LOAD_TEAMS_SUCCESS:
      return { ...state, loading: false, teams: action.payload, hasTeamsLoaded: true };
    case TeamActionTypes.LOAD_TEAMS_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export const getTeams = (state: State) => state.teams;
export const hasTeamsLoaded = (state: State) => state.hasTeamsLoaded;