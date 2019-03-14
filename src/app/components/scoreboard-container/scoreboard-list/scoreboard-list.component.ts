import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scoreboard-list',
  templateUrl: './scoreboard-list.component.html',
  styleUrls: ['./scoreboard-list.component.scss']
})
export class ScoreboardListComponent implements OnInit {
  @Input() games;
  @Input() gamesType: string;
  
  constructor() { }

  ngOnInit() { }
}
