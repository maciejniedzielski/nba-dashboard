import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { map, catchError, switchMap } from 'rxjs/operators';
import { TeamActionTypes, TeamStoreActions } from '../actions';
import { NbaService } from 'src/app/shared/services/nba.service';

@Injectable()
export class TeamEffects {
  @Effect()
  loadTeams: Observable<Action> = this._actions$
    .pipe(
      ofType(TeamActionTypes.LOAD_TEAMS),
      switchMap((action: TeamStoreActions.LoadTeams) => this.nbaService.getTeams().pipe(
        map((res: any) => {
          return new TeamStoreActions.LoadTeamsSuccess(res);
        }),
        catchError(() => {
          return of(new TeamStoreActions.LoadTeamsFailure);
        })
      ))
    );

  constructor(
    private _actions$: Actions,
    private nbaService: NbaService,
  ) { }
}
