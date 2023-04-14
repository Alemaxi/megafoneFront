import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'usuario', 
    loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule) 
  },
  {
    path: 'acesso',
    loadChildren: () => import('./acesso/acesso.module').then(m => m.AcessoModule)
  },
  {
    path: '**',
    redirectTo: 'acesso',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
