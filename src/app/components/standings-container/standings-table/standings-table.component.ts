import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { StandingTeam } from 'src/app/shared/models/standings.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';

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
  public conference: BehaviorSubject<string>;

  constructor() {
    this.displayedColumns = ['teamName', 'win', 'loss', 'winPct', 'gamesBehind', 'conf', 'div', 'home', 'away', 'last10', 'streak'];
    this.conference = new BehaviorSubject<string>('west');
  }

  ngOnInit() {
    this.conference.subscribe(conference => {
      this.dataSource = new MatTableDataSource(this.standings[conference]);
      this.dataSource.sort = this.sort;
    })
  }

  changeConference(conference: string): void {
    this.conference.next(conference);
  }
}
