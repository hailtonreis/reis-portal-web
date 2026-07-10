import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home';
import { PublicLayout } from './layout/public-layout/public-layout';
import { PrivateLayout } from './layout/private-layout/private-layout';

export const routes: Routes = [

  // Área pública
  {
    path: '',
    component: PublicLayout,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./features/auth/login/login').then(m => m.Login)
      }
    ]
  },

  // Área autenticada
  {
    path: 'sobre',
    component: PrivateLayout,
    children: [
      {
        path: 'sobre',
        loadComponent: () =>
          import('./features/sobre/sobre').then(m => m.SobreComponent)
      }
    ]
  },

  {
    path: '**',
    redirectTo: ''
  }

];