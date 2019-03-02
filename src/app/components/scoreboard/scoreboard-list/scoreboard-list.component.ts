import { Component, OnInit, Input } from '@angular/core';
import { NbaService } from 'src/app/shared/services/nba.service';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
  
  constructor(
    private nbaService: NbaService
  ) { }

  ngOnInit() {
    this.games$ = this.nbaService.getScoreboard().pipe(shareReplay());

    this.upcomingGames$ = this.games$.pipe(
      map(games => games.filter(game => !game.period.isEndOfPeriod))
    );
    
    this.endedGames$ = this.games$.pipe(
      map(games => games.filter(game => game.period.isEndOfPeriod))
    );
  }

}
