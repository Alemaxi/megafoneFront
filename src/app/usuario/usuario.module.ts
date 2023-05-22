import { NgModule } from '@angular/core';
import { MasterPageUsuarioComponent } from './master-page-usuario/master-page-usuario.component';
import { UsuarioRoutingModule } from './usuario-routing.module';

//Angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuEsquerdoOperacoesComponent } from '../shared/layout/menu-esquerdo-operacoes/menu-esquerdo-operacoes.component';


@NgModule({
  declarations: [
    MasterPageUsuarioComponent
  ],
  imports: [
    UsuarioRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MenuEsquerdoOperacoesComponent,
  ]
})
export class UsuarioModule { }
