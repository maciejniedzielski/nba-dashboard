import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AppSettings } from 'src/app/app.settings';
import { NbaService } from 'src/app/shared/services/nba.service';
import { shareReplay, tap } from 'rxjs/operators';
import { CoreReducer } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { PlayerStoreActions } from 'src/app/store/actions';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  public players$;
  
  public constructor(
    private appSettings: AppSettings,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private _store: Store<CoreReducer.State>
  ) { }

  ngOnInit() {
    this._store.dispatch(new PlayerStoreActions.LoadPlayers);
    this.players$ = this._store.select(CoreReducer.getPlayers);
    this.titleService.setTitle(this.activatedRoute.snapshot.data.title + this.appSettings.appTabTitle);
  }
}
