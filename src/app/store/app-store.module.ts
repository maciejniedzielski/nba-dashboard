import { NgModule } from '@angular/core';

import {
  ActionReducerMap,
  StoreModule,
  ActionReducer,
  State
} from '@ngrx/store';

import { CoreReducer } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { NbaService } from '../shared/services/nba.service';
import { TeamEffects, PlayerEffects } from './effects';
import { environment } from 'src/environments/environment';
import { storeLogger } from 'ngrx-store-logger';

export function logger(reducer: ActionReducer<CoreReducer.State>): any {
  return storeLogger({
    collapsed: true,
    level: 'info'
  })(reducer);
}
export const reducers: ActionReducerMap<CoreReducer.State> = {
  team: CoreReducer.fromTeam.reducer,
  player: CoreReducer.fromPlayer.reducer,
  standings: CoreReducer.fromStandings.reducer,
};

export const metaReducers = environment.production ? [] : [logger];

@NgModule({
  imports: [
    StoreModule.forRoot(
      reducers,
      { metaReducers }
    ),
    EffectsModule.forRoot(
      [
        TeamEffects,
        PlayerEffects,
      ]
    ),
  ],
  providers: [
    NbaService,
  ]
})
export class AppStoreModule {}
