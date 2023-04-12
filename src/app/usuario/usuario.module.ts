import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterPageUsuarioComponent } from './master-page-usuario/master-page-usuario.component';
import { UsuarioRoutingModule } from './usuario-routing.module';

//Angular material
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    MasterPageUsuarioComponent
  ],
  imports: [
    UsuarioRoutingModule,
    MatToolbarModule,
  ]
})
export class UsuarioModule { }
