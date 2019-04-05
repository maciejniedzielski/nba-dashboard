import { Component, OnInit, Input } from '@angular/core';
import { CoreReducer } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { tap, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {
  @Input('playerData') player;
  @Input('playerTeamConfig') teamConfig;
  @Input('careerSummary') careerSummary;

  public objectKeys = Object.keys;
  public hasPlayerLoaded$;
  public hasTeamConfigLoaded$;
  public playerStats$;

  constructor(private _store: Store<CoreReducer.State>) { }

  ngOnInit() {
    this.playerStats$ = this._store.select(CoreReducer.getPlayerStats).pipe(
      filter(Boolean),
      tap(stats => delete stats['regularSeason'])
    );
    this.hasPlayerLoaded$ = this._store.select(CoreReducer.hasPlayerLoaded);
    this.hasTeamConfigLoaded$ = this._store.select(CoreReducer.hasTeamConfigLoaded);
  }

  generateTeamGradient(teamColor: string): string {
    return `linear-gradient(to right, ${ teamColor }, #1d428a)`;
  }

  parseKeys(object) {
    if (object) {
      return Object.keys(object);
    } else {
      return false;
    }
  }

  parseValue(object) {
    if (object) {
      return Object.keys(object).reduce((acc, key) => {
        acc.push(object[key]);
        return acc;
      }, []);
    } else {
      return false;
    }
  }
}
