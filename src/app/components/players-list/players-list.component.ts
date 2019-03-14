import { Component, OnInit, Input } from '@angular/core';
import { distinctUntilChanged, debounceTime, startWith, switchMap, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

const DEBOUCE_TIME = 200;
@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {

  @Input() players$;
  @Input() tpl = 'default';
  public searchFormControl: FormControl = new FormControl();
  public filteredPlayers$;

  ngOnInit() {
    this.filteredPlayers$ = this.searchFormControl.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(DEBOUCE_TIME),
      startWith(''),
      switchMap((inputValue: string) => this.players$.pipe(
        map((players: any[]) =>
          players.filter(player =>
            this.transformString(player.firstName + player.lastName).includes(this.transformString(inputValue))
          )
        )
      ))
    );
  }

  public clearSearchControl(): void {
    this.searchFormControl.patchValue('');
  }

  private transformString(fullName: string) {
    return fullName.replace(/\s/g, "").toLowerCase();
  }
}
