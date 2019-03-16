import { Action } from '@ngrx/store';

export enum StandingsActionTypes {
  SELECT_CURRENT_CONFERENCE = '[Standings] Select current conference',
}

export namespace StandingsStoreActions {

  export class SelectCurrentConference implements Action {
    readonly type = StandingsActionTypes.SELECT_CURRENT_CONFERENCE;

    constructor(public payload: string) {}
  }

  export type StandingsActions = SelectCurrentConference;
}
