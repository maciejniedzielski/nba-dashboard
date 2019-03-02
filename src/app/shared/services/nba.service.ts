import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from 'src/app/app.settings';
import { Team } from '../models/team.model';
import { Standings } from '../models/standings.model';

@Injectable({
  providedIn: 'root'
})
export class NbaService {

  constructor(
    private httpClient: HttpClient,
    private appSettings: AppSettings
  ) { }

  public getStandings(): Observable<Standings>{
    return this.httpClient.get<Standings>(this.appSettings.dataApiUrl + `/standings`);
  }

  public getTeams(): Observable<Team[]> {
    return this.httpClient.get<Team[]>(this.appSettings.dataApiUrl + `/teams`);
  }

  public getTeamById(teamId: number): Observable<Team> {
    return this.httpClient.get<Team>(this.appSettings.dataApiUrl + `/teams/${ teamId }`);
  }

  public getScoreboard(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.appSettings.dataApiUrl + `/scoreboard`);
  }

}
