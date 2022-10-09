import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const Approutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/auth'
  }
];