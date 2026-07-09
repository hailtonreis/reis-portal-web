import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { PublicLayout } from './layout/public-layout/public-layout';
import { PrivateLayout } from './layout/private-layout/private-layout';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login/login').then(m => m.Login)
  },
   {
        path: '',
        component: PublicLayout,
        children: [

            {
                path: '',
                component: HomeComponent
            }
        ]
    },
  {
          path: '',
          component: PrivateLayout,
          children: [
              // futuramente:
              // dashboard
              // usuarios
              // perfil
          ]
      },
      {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard/dashboard').then(m => m.Dashboard)
  },
];