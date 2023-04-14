import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
import { EntrarComponent } from './entrar/entrar.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { 
        path: 'cadastro', 
        component: CadastroComponent 
      },
      {
        path: 'entrar',
        component: EntrarComponent
      },
      {
        path: '',
        redirectTo: 'cadastro',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'acesso',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class AcessoRoutingModule { }
