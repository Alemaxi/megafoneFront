import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MasterPageUsuarioComponent } from './master-page-usuario/master-page-usuario.component';

const routes: Route[] = [
  {
    path: '',
    component: MasterPageUsuarioComponent,
    children: [
      {
        path: 'receptor',
        loadChildren: () => import('./receptor/receptor.module').then(m => m.ReceptorModule)
      },
      {
        path: 'mensageiro',
        loadChildren: () => import('./mensageiro/mensageiro.module').then(m => m.MensageiroModule)
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UsuarioRoutingModule { }
