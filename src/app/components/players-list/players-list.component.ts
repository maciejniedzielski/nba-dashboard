import { Component, OnInit, Input } from '@angular/core';
import { NbaService } from 'src/app/shared/services/nba.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {
  
  @Input() players;
  @Input() tpl = 'default';

  constructor() { }

  ngOnInit() { 
  }
}
