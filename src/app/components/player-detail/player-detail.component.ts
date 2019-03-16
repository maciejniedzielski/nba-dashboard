import { Component, OnInit, Input } from '@angular/core';
import { CoreReducer } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {
  @Input('playerData') player;
  @Input('playerTeamConfig') teamConfig;

  public hasPlayerLoaded$;
  public hasTeamConfigLoaded$;

  constructor(private _store: Store<CoreReducer.State>) { }

  ngOnInit() {
    this.hasPlayerLoaded$ = this._store.select(CoreReducer.hasPlayerLoaded);
    this.hasTeamConfigLoaded$ = this._store.select(CoreReducer.hasTeamConfigLoaded);
  }

  generateTeamGradient(teamColor: string): string {
    return `linear-gradient(to right, ${ teamColor }, #1d428a)`;
  }
}
