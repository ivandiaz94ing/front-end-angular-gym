import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'change-detection',
        title: 'Gestion Equipos',
        loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component'),
      },
      {
        path: 'control-flow',
        title: 'Reportes',
        loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component'),
      },
      {
        path: 'defer-options',
        title: 'Gestion de Empleados',
        loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component'),
      },
      {
        path: 'defer-views',
        title: 'Facturacion',
        loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component'),
      },
      {
        path: 'user/:id',
        title: 'User View',
        loadComponent: () => import('./dashboard/pages/user/user.component'),
      },
      {
        path: 'user-list',
        title: 'Gestion de Clientes',
        loadComponent: () => import('./dashboard/pages/users/users.component'),
      },
      {
        path: 'view-transition-1',
        title: 'View Transition 1',
        loadComponent: () => import('./dashboard/pages/view-transition/view-transition1.component'),
      },
      {
        path: 'view-transition-2',
        title: 'View Transition 2',
        loadComponent: () => import('./dashboard/pages/view-transition/view-transition2.component'),
      },
      {
        path:'', redirectTo: 'control-flow', pathMatch: 'full',
      }
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }



];
