import { Component, OnInit, Input } from '@angular/core';
import { NbaService } from 'src/app/shared/services/nba.service';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

export enum GameStatus {
  'UPCOMING' = 1,
  'LIVE' = 2,
  'FINAL' = 1,
}
@Component({
  selector: 'app-scoreboard-list',
  templateUrl: './scoreboard-list.component.html',
  styleUrls: ['./scoreboard-list.component.scss']
})
export class ScoreboardListComponent implements OnInit {
  @Input() tpl = 'default';
  private games$: Observable<any[]>;
  public upcomingGames$;
  public endedGames$;
  public liveGames$;
  
  constructor(
    private nbaService: NbaService
  ) { }

  ngOnInit() {
    this.games$ = this.nbaService.getScoreboard().pipe(shareReplay());

    this.upcomingGames$ = this.games$.pipe(
      map(games => games.filter(game => game.statusNum === GameStatus.UPCOMING))
    );
    
    this.endedGames$ = this.games$.pipe(
      map(games => games.filter(game => game.statusNum === GameStatus.FINAL))
    );

    this.liveGames$ = this.games$.pipe(
      map(games => games.filter(game => game.statusNum === GameStatus.LIVE))
    );
  }

}
