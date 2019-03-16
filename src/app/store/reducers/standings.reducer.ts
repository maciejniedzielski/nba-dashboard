import { StandingsStoreActions, StandingsActionTypes } from '../actions';

export interface State {
  selectedConference: string;
}

export const initialState: State = {
  selectedConference: 'west'
};

export function reducer(state = initialState, action: StandingsStoreActions.StandingsActions): State {
  switch (action.type) {
    case StandingsActionTypes.SELECT_CURRENT_CONFERENCE:
      return { ...state, selectedConference: action.payload };
    default:
      return state;
  }
}

export const getSelectedConference = (state: State) => state.selectedConference;