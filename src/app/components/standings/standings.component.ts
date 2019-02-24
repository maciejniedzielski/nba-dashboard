import { Component, OnInit } from '@angular/core';
import { NbaService } from 'src/app/shared/services/nba.service';
import { map, merge } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {
  public standings$;
  public objectKeys = Object.keys;

  constructor(
    private nbaService: NbaService
  ) { }

  ngOnInit() {
    this.standings$ = forkJoin(
      this.nbaService.getStandings().pipe(map(res => res['league'].standard.conference)),
      this.nbaService.getTeams().pipe(
        map(teams => teams['league'].standard.filter(team => team.isNBAFranchise))
      )
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
