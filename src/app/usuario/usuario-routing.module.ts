import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MasterPageUsuarioComponent } from './master-page-usuario/master-page-usuario.component';

const routes: Route[] = [
  {
    path: '',
    component: MasterPageUsuarioComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [

  ]
})
export class UsuarioRoutingModule { }
