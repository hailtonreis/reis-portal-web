import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home';
import { PublicLayout } from './layout/public-layout/public-layout';

export const routes: Routes = [
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
  {
    path: 'cadastro',
    loadComponent: () =>
      import('./features/usuarios/cadastro/cadastro-usuario')
        .then(c => c.CadastroUsuarioComponent)
  },
  {
    path: 'casamento',
    loadComponent: () =>
      import('./layout/public-layout/portfolio/casamento/casamento')
        .then(c => c.CasamentoComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];