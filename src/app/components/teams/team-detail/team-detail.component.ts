import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {
  @Input('teamData') data;
  
  constructor() { }

  ngOnInit() {}

  generateTeamGradient(teamColor: string): string {
    return `linear-gradient(to right, ${ teamColor }, #1d428a)`;
  }

}
