import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AppSettings } from 'src/app/app.settings';
import { NbaService } from 'src/app/shared/services/nba.service';
import { tap, merge, switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-teams-item',
  templateUrl: './teams-item.component.html',
  styleUrls: ['./teams-item.component.scss']
})
export class TeamsItemComponent implements OnInit {
  public team$;

  public constructor(
    private appSettings: AppSettings,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private nbaService: NbaService
  ) { }

  ngOnInit() {

    this.team$ = this.nbaService.getTeamById(this.activatedRoute.snapshot.params.id).pipe(
      switchMap(teamData => this.nbaService.getTeamRosterById(teamData.urlName).pipe(
        map(teamRoster => { 
          teamData['roster'] = teamRoster;
          return teamData;
        })
      )),
      switchMap(teamData => this.nbaService.getTeamStatsById(+teamData.teamId).pipe(
        map(teamStats => { 
          teamData['stats'] = teamStats;
          return teamData;
        })
      )),
      switchMap(teamData => this.nbaService.getTeamAvgGameStatsById(+teamData.teamId).pipe(
        map(teamAvgGameStats => { 
          teamData['avg'] = teamAvgGameStats;
          return teamData;
        })
      )),
    );
    
    this.titleService.setTitle(this.capitalizeSlug(this.activatedRoute.snapshot.params.slug) + this.appSettings.appTabTitle);
  }

  private capitalizeSlug(slug): string {
    return slug.charAt(0).toUpperCase() + slug.slice(1);
  }
}