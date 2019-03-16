import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AppSettings } from 'src/app/app.settings';
import { TeamStoreActions } from 'src/app/store/actions';
import { CoreReducer } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Team } from 'src/app/shared/models/team.model';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  public teams$: Observable<Team[]>;

  public constructor(
    private appSettings: AppSettings,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private _store: Store<CoreReducer.State>
  ) { }

  ngOnInit() {
    this._store.dispatch(new TeamStoreActions.LoadTeams);
    this.teams$ = this._store.select(CoreReducer.getTeams);
    this.titleService.setTitle(this.activatedRoute.snapshot.data.title + this.appSettings.appTabTitle);   
  }
}
