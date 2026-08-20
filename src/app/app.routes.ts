import { Routes } from '@angular/router';

import { HomeComponent } from './features/home/home';
import { PublicLayout } from './layout/public-layout/public-layout';
import { EstatisticasComponent } from './layout/public-layout/estatisticas/estatisticas';

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
          import('./features/auth/login/login')
            .then(m => m.Login)
      },

      {
        path: 'estatisticas',
        component: EstatisticasComponent
      }

    ]
  },

  {
    path: 'reis-ai',
    loadComponent: () =>
      import('./layout/public-layout/reis-ai/reis-ai')
        .then(c => c.ReisAiComponent)
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