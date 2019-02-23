import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AppSettings } from 'src/app/app.settings';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {

  public constructor(
    private appSettings: AppSettings,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) { }

  ngOnInit() {
    this.titleService.setTitle(this.activatedRoute.snapshot.data.title + this.appSettings.appTabTitle);
  }
}
