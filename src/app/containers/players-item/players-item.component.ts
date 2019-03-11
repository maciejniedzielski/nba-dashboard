import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppSettings } from 'src/app/app.settings';

const mock = {
  "firstName": "Steven",
  "lastName": "Adams",
  "jersey": "12",
  "pos": "C",
  "posExpanded": "Center",
  "heightFeet": "7",
  "heightInches": "0",
  "weightPounds": "265",
  "personId": "203500",
  "teamData": {
    "urlName": "thunder",
    "city": "Oklahoma City",
    "nickname": "Thunder",
    "tricode": "OKC"
  },
  "isAllStar": false,
  "orderChar": "A",
  "playerUrl": "/players/steven/adams/203500",
  "displayName": "Adams, Steven"
}

const mockId = 203500;

@Component({
  selector: 'app-players-item',
  templateUrl: './players-item.component.html',
  styleUrls: ['./players-item.component.scss']
})
export class PlayersItemComponent implements OnInit {

  public data = mock;

  public constructor(
    private appSettings: AppSettings,
    private titleService: Title
  ) { }


  ngOnInit() {
    this.titleService.setTitle('Stephen Curry' + this.appSettings.appTabTitle);
  }
}
