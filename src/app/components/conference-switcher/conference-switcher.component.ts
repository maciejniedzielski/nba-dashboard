import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CoreReducer } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StandingsStoreActions } from 'src/app/store/actions';

@Component({
  selector: 'app-conference-switcher',
  templateUrl: './conference-switcher.component.html',
  styleUrls: ['./conference-switcher.component.scss']
})
export class ConferenceSwitcherComponent implements OnInit {
  public currentConference$: Observable<string>;

  constructor(
    private _store: Store<CoreReducer.State>
  ) { }

  ngOnInit() {
    this.currentConference$ = this._store.select(CoreReducer.getSelectedConference);
  }

  public changeConference(conference: string) {
    this._store.dispatch(new StandingsStoreActions.SelectCurrentConference(conference))
  }
}
