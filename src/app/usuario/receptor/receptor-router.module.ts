import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { MegafonesComponent } from './megafones/megafones.component';

const routes: Route[] = [
  {
    path: '',
    component: MegafonesComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class ReceptorRouterModule { }
