import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CadastroComponent } from './cadastro/cadastro.component';
import { EntrarComponent } from './entrar/entrar.component';
import { AcessoRoutingModule } from './acesso-routing.module';

@NgModule({
  declarations: [
    CadastroComponent,
    EntrarComponent
  ],
  imports: [
    CommonModule,
    AcessoRoutingModule,
    ReactiveFormsModule
  ]
})
export class AcessoModule { }
