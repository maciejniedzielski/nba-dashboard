import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { StandingTeam } from 'src/app/shared/models/standings.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Observable } from 'rxjs';
import { CoreReducer } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-standings-table',
  templateUrl: './standings-table.component.html',
  styleUrls: ['./standings-table.component.scss']
})
export class StandingsTableComponent implements OnInit {
  @Input() standings: StandingTeam[];
  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns: string[];
  public dataSource;
  public conference: Observable<string>;

  constructor(private _store: Store<CoreReducer.State>) {
    this.displayedColumns = ['teamName', 'win', 'loss', 'winPct', 'gamesBehind', 'conf', 'div', 'home', 'away', 'last10', 'streak'];
    this.conference = this._store.select(CoreReducer.getSelectedConference);
  }

  ngOnInit() {
    this.conference.subscribe(conference => {
      this.dataSource = new MatTableDataSource(this.standings[conference]);
      this.dataSource.sort = this.sort;
    })
  }
}
