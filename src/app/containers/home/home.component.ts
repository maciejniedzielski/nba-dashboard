import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AppSettings } from 'src/app/app.settings';
import { NbaService } from 'src/app/shared/services/nba.service';
import { map, tap } from 'rxjs/operators';
import { GameStatus } from 'src/app/components/scoreboard-container/scoreboard-container.component';
import { mockGames } from 'src/app/components/scoreboard-container/mockdata-scoreboard';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public liveGames$;

  public constructor(
    private appSettings: AppSettings,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private nbaService: NbaService
  ) { }

  ngOnInit() {
    this.liveGames$ = this.nbaService.getScoreboard().pipe(
      map(games => games.filter(game => game.statusNum === GameStatus.LIVE)),
    );
    // this.liveGames$ = of(mockGames.filter(game => game.statusNum === GameStatus.LIVE));
    this.titleService.setTitle(this.activatedRoute.snapshot.data.title + this.appSettings.appTabTitle);
  }
}
