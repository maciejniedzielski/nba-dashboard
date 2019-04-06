import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { shareReplay, map, tap } from 'rxjs/operators';
import { NbaService } from 'src/app/shared/services/nba.service';
import { mockGames } from './mockdata-scoreboard';

export enum GameStatus {
  'UPCOMING' = 1,
  'LIVE' = 2,
  'LATEST' = 3,
}

@Component({
  selector: 'app-scoreboard-container',
  templateUrl: './scoreboard-container.component.html',
  styleUrls: ['./scoreboard-container.component.scss']
})
export class ScoreboardContainerComponent implements OnInit {
  private games$: Observable<any[]>;
  public upcomingGames$;
  public latestGames$;
  public liveGames$;
  
  constructor(private nbaService: NbaService) { }

  ngOnInit() {
    this.games$ = this.nbaService.getScoreboard().pipe(shareReplay());
    // this.games$ = of(mockGames);

    this.upcomingGames$ = this.games$.pipe(
      map(games => games.filter(game => game.statusNum === GameStatus.UPCOMING))
    );
    
    this.latestGames$ = this.games$.pipe(
      map(games => games.filter(game => game.statusNum === GameStatus.LATEST))
    );

    this.liveGames$ = this.games$.pipe(
      map(games => games.filter(game => game.statusNum === GameStatus.LIVE))
    );
  }
}
