import { Component, OnInit, Input } from '@angular/core';
import { distinctUntilChanged, debounceTime, startWith, switchMap, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { StringConventer } from 'src/app/shared/classes/string-converter';
import { Observable } from 'rxjs';
import { CoreReducer } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';

const DEBOUCE_TIME = 200;
@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {

  @Input() players$;
  @Input() tpl = 'default';

  public hasPlayersLoaded$: Observable<boolean>;
  public searchFormControl: FormControl = new FormControl();
  public filteredPlayers$;

  constructor(private _store: Store<CoreReducer.State>) {}

  ngOnInit() {
    this.hasPlayersLoaded$ = this._store.select(CoreReducer.hasPlayersLoaded);

    this.filteredPlayers$ = this.searchFormControl.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(DEBOUCE_TIME),
      startWith(''),
      switchMap((inputValue: string) => this.players$.pipe(
        map((players: any[]) =>
          players.filter(player =>
            StringConventer.transformString(player.firstName + player.lastName).includes(StringConventer.transformString(inputValue))
          )
        )
      ))
    );
  }

  public clearSearchControl(): void {
    this.searchFormControl.patchValue('');
  }

  public handleError(event: { target: HTMLImageElement }): void {
    event.target.src = 'assets/images/player-placeholder.png';
    event.target.classList.add('player__photo--placeholder');
  }
}
