import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { StandingsContainerComponent } from './components/standings-container/standings-container.component';
import { ResultsComponent } from './components/results/results.component';
import { TeamsComponent } from './containers/teams/teams.component';
import { ScoresComponent } from './containers/scores/scores.component';
import { PlayersComponent } from './containers/players/players.component';
import { PlayersItemComponent } from './containers/players-item/players-item.component';
import { AppSettings } from './app.settings';
import { StandingsListComponent } from './components/standings-container/standings-list/standings-list.component';
import { TeamsListComponent } from './components/teams/teams-list/teams-list.component';
import { ScoreboardListComponent } from './components/scoreboard/scoreboard-list/scoreboard-list.component';
import { StandingsTableComponent } from './components/standings-container/standings-table/standings-table.component';
import { StandingsComponent } from './containers/standings/standings.component';
import { SharedModule } from './shared/shared.module';
import { PlayersListComponent } from './components/players-list/players-list.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    StandingsContainerComponent,
    ResultsComponent,
    TeamsComponent,
    ScoresComponent,
    PlayersComponent,
    PlayersItemComponent,
    StandingsListComponent,
    TeamsListComponent,
    ScoreboardListComponent,
    StandingsTableComponent,
    StandingsComponent,
    PlayersListComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    AppSettings,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
