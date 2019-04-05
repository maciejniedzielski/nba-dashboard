import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { map, catchError, switchMap, withLatestFrom, filter, tap } from 'rxjs/operators';
import { PlayerActionTypes, PlayerStoreActions, TeamStoreActions } from '../actions';
import { NbaService } from 'src/app/shared/services/nba.service';
import { CoreReducer } from '../reducers';
import { Player } from 'src/app/shared/models/player.model';
import { Title } from '@angular/platform-browser';
import { AppSettings } from 'src/app/app.settings';

@Injectable()
export class PlayerEffects {
  @Effect()
  loadPlayers: Observable<Action> = this._actions$
    .pipe(
      ofType(PlayerActionTypes.LOAD_PLAYERS),
      withLatestFrom(this._store.select(CoreReducer.hasPlayersLoaded)),
      filter(([ action, hasPlayersLoaded ]) => {
        return !hasPlayersLoaded;
      }),
      map(([ action, hasPlayersLoaded ]) => action),
      switchMap((action: PlayerStoreActions.LoadPlayers) => this._nbaService.getPlayers().pipe(
        map((players: Player[]) => {
          return new PlayerStoreActions.LoadPlayersSuccess(players);
        }),
        catchError(() => {
          return of(new PlayerStoreActions.LoadPlayersFailure());
        })
      ))
    );

    @Effect()
    loadPlayer: Observable<Action> = this._actions$
      .pipe(
        ofType(PlayerActionTypes.LOAD_PLAYER),
        switchMap((action: PlayerStoreActions.LoadPlayer) => this._nbaService.getPlayerById(action.payload).pipe(
          tap(player => this._titleService.setTitle(`${player.firstName} ${player.lastName}` + this._appSettings.appTabTitle)),
          switchMap((player: Player) => [
            new TeamStoreActions.LoadTeamConfig(player.teamData.tricode),
            new PlayerStoreActions.LoadPlayerSuccess(player)
          ]),
          catchError(() => {
            return of(new PlayerStoreActions.LoadPlayerFailure());
          })
        ))
      );

    @Effect()
    loadPlayerData: Observable<Action> = this._actions$
      .pipe(
        ofType(PlayerActionTypes.LOAD_PLAYER),
        switchMap((action: PlayerStoreActions.LoadPlayer) => this._nbaService.getPlayerStatsById(action.payload).pipe(
          switchMap((playerStats: unknown) => [
            new PlayerStoreActions.LoadPlayerStatsSuccess(playerStats)
          ]),
          catchError(() => {
            return of(new PlayerStoreActions.LoadPlayerStatsFailure());
          })
        ))
      );

  constructor(
    private _actions$: Actions,
    private _nbaService: NbaService,
    private _store: Store<CoreReducer.State>,
    private _titleService: Title,
    private _appSettings: AppSettings
  ) { }
}
