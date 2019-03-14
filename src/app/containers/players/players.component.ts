import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AppSettings } from 'src/app/app.settings';
import { NbaService } from 'src/app/shared/services/nba.service';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  public players$;
  
  public constructor(
    private appSettings: AppSettings,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private nbaService: NbaService
  ) { }

  ngOnInit() {
    this.players$ = this.nbaService.getPlayers().pipe(shareReplay(1));
    this.titleService.setTitle(this.activatedRoute.snapshot.data.title + this.appSettings.appTabTitle);
  }
}
