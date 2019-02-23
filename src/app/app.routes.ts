import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { 
    path: 'home',
    component: HomeComponent,
    data: { title: 'Login' }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
