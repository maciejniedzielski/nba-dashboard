import { Component, OnInit, Input } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {
  @Input('teamData') data$;
  public teamRoster$;

  constructor() { }

  ngOnInit() {
    this.teamRoster$ = this.data$.pipe(
      map(teamData => teamData['roster'].players.player)
    )
  }

  generateTeamGradient(teamColor: string): string {
    return `linear-gradient(to right, ${ teamColor }, #1d428a)`;
  }

}
