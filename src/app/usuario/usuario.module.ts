import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterPageUsuarioComponent } from './master-page-usuario/master-page-usuario.component';
import { UsuarioRoutingModule } from './usuario-routing.module';


@NgModule({
  declarations: [
    MasterPageUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ]
})
export class UsuarioModule { }
