import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { map, catchError, switchMap, withLatestFrom, filter } from 'rxjs/operators';
import { TeamActionTypes, TeamStoreActions, PlayerStoreActions } from '../actions';
import { NbaService } from 'src/app/shared/services/nba.service';
import { CoreReducer } from '../reducers';

@Injectable()
export class TeamEffects {
  @Effect()
  loadTeams: Observable<Action> = this._actions$
    .pipe(
      ofType(TeamActionTypes.LOAD_TEAMS),
      withLatestFrom(this._store.select(CoreReducer.hasTeamsLoaded)),
      filter(([ action, hasTeamsLoaded ]) => {
        return !hasTeamsLoaded;
      }),
      map(([ action, hasTeamsLoaded ]) => action),
      switchMap((action: TeamStoreActions.LoadTeams) => this.nbaService.getTeams().pipe(
        map((res: any) => {
          return new TeamStoreActions.LoadTeamsSuccess(res);
        }),
        catchError(() => {
          return of(new TeamStoreActions.LoadTeamsFailure);
        })
      ))
    );

    @Effect()
    loadTeamConfig: Observable<Action> = this._actions$
      .pipe(
        ofType(TeamActionTypes.LOAD_TEAM_CONFIG),
        switchMap((action: TeamStoreActions.LoadTeamConfig) => this.nbaService.getTeamConfigByTricode(action.payload).pipe(
          map((res: any) => {
            return new TeamStoreActions.LoadTeamConfigSuccess(res);
          }),
          catchError(() => {
            return of(new TeamStoreActions.LoadTeamsFailure);
          })
        ))
      );

  constructor(
    private _actions$: Actions,
    private nbaService: NbaService,
    private _store: Store<CoreReducer.State>
  ) { }
}
