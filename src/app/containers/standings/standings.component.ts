import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {
  public standingsViewType: string = 'table';

  public constructor(
    private appSettings: AppSettings,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.activatedRoute.snapshot.data.title + this.appSettings.appTabTitle);
  }

  public changeStandingsViewType(type: string): void {
    this.standingsViewType = type; 
  }
}
