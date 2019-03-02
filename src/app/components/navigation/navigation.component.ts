import { Component, OnInit } from '@angular/core';
import { NavigationPaths } from 'src/app/app.routes';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  public navigationElements = NavigationPaths;
  public isMenuToggled: boolean = false;

  constructor() { }

  ngOnInit() { }

  public toggleMenu(): void {
    this.isMenuToggled = !this.isMenuToggled;
  }

}
