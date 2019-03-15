import { NgModule } from '@angular/core';

import {
  ActionReducerMap,
  StoreModule
} from '@ngrx/store';

import { CoreReducer } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { NbaService } from '../shared/services/nba.service';
import { TeamEffects, PlayerEffects } from './effects';

export const reducers: ActionReducerMap<CoreReducer.State> = {
  team: CoreReducer.fromTeam.reducer,
  player: CoreReducer.fromPlayer.reducer,
};

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
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
