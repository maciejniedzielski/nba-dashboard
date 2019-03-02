import { Component, OnInit } from '@angular/core';
import { NbaService } from 'src/app/shared/services/nba.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {
  
  public players$;

  constructor(
    private nbaService: NbaService
  ) { }

  ngOnInit() {
    this.players$ = this.nbaService.getPlayers();
  }

}
