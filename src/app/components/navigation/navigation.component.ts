import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationPaths } from 'src/app/app.routes';
import { Router, NavigationEnd } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {

  public navigationElements = NavigationPaths;
  public isMenuToggled: boolean = false;

  private subGuard$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.pipe(
      takeUntil(this.subGuard$)
    ).subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.isMenuToggled = false;
      }
    });
  }

  public toggleMenu(): void {
    this.isMenuToggled = !this.isMenuToggled;
  }

  ngOnDestroy(): void {
    this.subGuard$.next(true);
  }
}
