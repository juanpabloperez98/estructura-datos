import { Routes } from '@angular/router';
import { IntroduccionComponent } from '../modules/introduccion/introduccion.component';


export const IntroduccionRoutes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'intro',
        component: IntroduccionComponent,
      },
    ]
  }
];