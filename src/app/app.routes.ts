import { Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { TeamsComponent } from './containers/teams/teams.component';
import { PlayersComponent } from './containers/players/players.component';
import { ScoresComponent } from './containers/scores/scores.component';
import { PlayersItemComponent } from './containers/players-item/players-item.component';
import { StandingsComponent } from './containers/standings/standings.component';

export const NavigationPaths = [
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
    path: 'standings',
    component: StandingsComponent,
    data: { title: 'Standings' }
  },
  { 
    path: 'players',
    component: PlayersComponent,
    data: { title: 'Players' }
  },
  { 
    path: 'teams',
    component: TeamsComponent,
    data: { title: 'Teams' }
  }
];

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  ...NavigationPaths,
  { 
    path: 'players/:id',
    component: PlayersItemComponent
  },
  { 
    path: 'teams/:id/:slug',
    component: TeamsComponent,
    data: { title: 'Teams' }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
