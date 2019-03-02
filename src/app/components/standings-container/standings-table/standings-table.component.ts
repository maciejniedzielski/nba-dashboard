import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { StandingTeam } from 'src/app/shared/models/standings.model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-standings-table',
  templateUrl: './standings-table.component.html',
  styleUrls: ['./standings-table.component.scss']
})
export class StandingsTableComponent implements OnInit {
  @Input() standings: StandingTeam[];
  @ViewChild(MatSort) sort: MatSort;
  
  public displayedColumns: string[] = ['teamName', 'win', 'loss', 'winPct', 'gamesBehind', 'conf', 'div', 'home', 'away', 'last10', 'streak'];
  public dataSource;  

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.standings['east']);
    this.dataSource.sort = this.sort;
  }
}
