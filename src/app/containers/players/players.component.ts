import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  public constructor(
    private appSettings: AppSettings,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.activatedRoute.snapshot.data.title + this.appSettings.appTabTitle);
  }
}
