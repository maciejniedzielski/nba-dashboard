import { Component, OnInit } from '@angular/core';
import { NbaService } from 'src/app/shared/services/nba.service';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged, startWith, switchMap, map, debounceTime, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {
  public searchFormControl: FormControl = new FormControl();
  public filteredTeams$;
  private teams$: Observable<any>;

  constructor(
    private nbaService: NbaService
  ) { }

  ngOnInit() {
    this.teams$ = this.nbaService.getTeams();
    this.nbaService.getTeamById(1610612737).subscribe(); //atl id

    this.filteredTeams$ = this.searchFormControl.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(200),
      startWith(''),
      switchMap((inputValue: string) => this.teams$.pipe(
        map(teams => teams.filter(team => 
          this.transformString(team['fullName']).includes(this.transformString(inputValue))
        ))
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
