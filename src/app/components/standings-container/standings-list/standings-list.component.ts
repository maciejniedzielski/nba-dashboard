import { Component, OnInit, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { StandingTeam } from 'src/app/shared/models/standings.model';

@Component({
  selector: 'app-standings-list',
  templateUrl: './standings-list.component.html',
  styleUrls: ['./standings-list.component.scss']
})
export class StandingsListComponent implements OnInit {
  @Input() standings: StandingTeam[];
  @Input() conference: string;

  public teams: StandingTeam;

  constructor() { }

  ngOnInit() {
    this.teams = this.standings[this.conference];
    console.log(this.teams);
  }

}
