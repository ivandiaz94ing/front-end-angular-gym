import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [


      {
        path: 'empleados',
        title: 'Gestion Empleados',
        loadComponent: () => import('./dashboard/pages/empleados/empleados.component'),
      },

      {
        path: 'miembros',
        title: 'Miembros',
        loadComponent: () => import('./dashboard/pages/miembros/miembros.component'),
      },

      {
        path: 'entrenadores',
        title: 'Entrenadores',
        loadComponent: () => import('./dashboard/pages/entrenadores/entrenadores.component'),
      },

      {
        path: 'planes',
        title: 'Planes',
        loadComponent: () => import('./dashboard/pages/planes/planes.component'),
      },

      {
        path: 'reportes',
        title: 'Reportes',
        loadComponent: () => import('./dashboard/pages/reportes/reportes.component'),
      },




      {
        path:'', redirectTo: 'dashboard', pathMatch: 'full',
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }



];
