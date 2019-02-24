import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/app/app.settings';

@Injectable({
  providedIn: 'root'
})
export class NbaService {

  constructor(
    private http: HttpClient,
    private appSettings: AppSettings
  ) { }

  public getStandings() {
    return this.http.get(this.appSettings.apiIp + `/data/standings`);
  }

  public getTeams() {
    return this.http.get(this.appSettings.apiIp + `/data/teams`);
  }

  public getTeamById(teamId: number) {
    return this.http.get(this.appSettings.apiIp + `/data/teams/${ teamId }`);
  }
}
