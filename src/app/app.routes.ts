import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { TeamsComponent } from './containers/teams/teams.component';
import { PlayersComponent } from './containers/players/players.component';
import { ScoresComponent } from './containers/scores/scores.component';
import { PlayersItemComponent } from './containers/players-item/players-item.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { 
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  { 
    path: 'scores',
    component: ScoresComponent,
    data: { title: 'Scores' }
  },
  { 
    path: 'players',
    component: PlayersComponent,
    data: { title: 'Players' }
  },
  { 
    path: 'players/:id',
    component: PlayersItemComponent
  },
  { 
    path: 'teams',
    component: TeamsComponent,
    data: { title: 'Teams' }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
