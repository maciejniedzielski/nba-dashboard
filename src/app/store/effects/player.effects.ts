import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { map, catchError, switchMap, withLatestFrom, filter } from 'rxjs/operators';
import { PlayerActionTypes, PlayerStoreActions } from '../actions';
import { NbaService } from 'src/app/shared/services/nba.service';
import { CoreReducer } from '../reducers';
import { Player } from 'src/app/shared/models/player.model';

@Injectable()
export class PlayerEffects {
  @Effect()
  loadPlayers: Observable<Action> = this._actions$
    .pipe(
      ofType(PlayerActionTypes.LOAD_PLAYERS),
      withLatestFrom(this._store.select(CoreReducer.hasPlayersLoaded)),
      filter(([ action, hasPlayersLoaded ]) => !hasPlayersLoaded),
      map(([ action, hasPlayersLoaded ]) => action),
      switchMap((action: PlayerStoreActions.LoadPlayers) => this._nbaService.getPlayers().pipe(
        map((players: Player[]) => {
          return new PlayerStoreActions.LoadPlayersSuccess(players);
        }),
        catchError(() => {
          return of(new PlayerStoreActions.LoadPlayersFailure);
        })
      ))
    );

  constructor(
    private _actions$: Actions,
    private _nbaService: NbaService,
    private _store: Store<CoreReducer.State>
  ) { }
}
