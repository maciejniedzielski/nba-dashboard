import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {
  @Input('playerData') data;

  constructor() { }

  ngOnInit() {
    console.log(this.data)
  }

}
