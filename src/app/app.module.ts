import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { StandingsComponent } from './components/standings/standings.component';
import { ResultsComponent } from './components/results/results.component';
import { TeamsComponent } from './containers/teams/teams.component';
import { ScoresComponent } from './containers/scores/scores.component';
import { PlayersComponent } from './containers/players/players.component';
import { PlayersItemComponent } from './containers/players-item/players-item.component';
import { AppSettings } from './app.settings';
import { StandingsListComponent } from './components/standings/standings-list/standings-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    StandingsComponent,
    ResultsComponent,
    TeamsComponent,
    ScoresComponent,
    PlayersComponent,
    PlayersItemComponent,
    StandingsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AppSettings,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
