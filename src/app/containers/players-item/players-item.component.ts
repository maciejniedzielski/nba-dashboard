import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-players-item',
  templateUrl: './players-item.component.html',
  styleUrls: ['./players-item.component.scss']
})
export class PlayersItemComponent implements OnInit {

  public constructor(
    private appSettings: AppSettings,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Stephen Curry' + this.appSettings.appTabTitle);
  }
}
