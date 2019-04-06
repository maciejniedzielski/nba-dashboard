import { Component, OnInit, Input } from '@angular/core';
import { NbaService } from 'src/app/shared/services/nba.service';
import { map, merge } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';
import { Standings } from 'src/app/shared/models/standings.model';
import { Team } from 'src/app/shared/models/team.model';

@Component({
  selector: 'app-standings-container',
  templateUrl: './standings-container.component.html',
  styleUrls: ['./standings-container.component.scss']
})
export class StandingsContainerComponent implements OnInit {
  @Input() tpl: 'table' | 'list' = 'table';
  public standings$: Observable<Standings | Team[]>;
  public objectKeys = Object.keys;

  constructor(
    private nbaService: NbaService
  ) { }

  ngOnInit() {
    this.standings$ = forkJoin(
      this.nbaService.getStandings(),
      this.nbaService.getTeams()
    ).pipe(
      map(([conferences, filteredTeams]) => {
        conferences['west'].map(conferenceTeam => conferenceTeam['data'] = filteredTeams.find(nbaTeam => nbaTeam.teamId === conferenceTeam.teamId))
        conferences['east'].map(conferenceTeam => conferenceTeam['data'] = filteredTeams.find(nbaTeam => nbaTeam.teamId === conferenceTeam.teamId))
        return [conferences, filteredTeams]
      }),
      map(([conferences, teams]) => conferences)
    );
  }
}
