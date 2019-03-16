import { Component, OnInit } from '@angular/core';
import { CoreReducer } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { PlayerStoreActions } from 'src/app/store/actions';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-players-item',
  templateUrl: './players-item.component.html',
  styleUrls: ['./players-item.component.scss']
})
export class PlayersItemComponent implements OnInit {

  public playerTeamConfig$;
  public player$;

  public hasPlayerLoaded$;
  public hasTeamConfigLoaded$;

  public constructor(
    private _store: Store<CoreReducer.State>,
    private _activatedRoute: ActivatedRoute
  ) { }


  ngOnInit() {
    this._store.dispatch(new PlayerStoreActions.LoadPlayer(this._activatedRoute.snapshot.params.id));
    this.player$ = this._store.select(CoreReducer.getPlayer).pipe(filter(Boolean));
    this.playerTeamConfig$ = this._store.select(CoreReducer.getTeamConfig).pipe(filter(Boolean));
  }
}
