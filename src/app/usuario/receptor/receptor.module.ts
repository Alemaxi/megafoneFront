import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptorRouterModule } from './receptor-router.module';
import { MegafonesComponent } from './megafones/megafones.component';
import { MegafonesLayoutModule } from 'src/app/shared/layout/megafones-layout/megafones-layout.module';
import { MensagensLayoutModule } from '../../shared/layout/mensagens-layout/mensagens-layout.module'

//angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MegafonesComponent
  ],
  imports: [
    CommonModule,
    ReceptorRouterModule,
    MatToolbarModule,
    MegafonesLayoutModule,
    MatIconModule,
    MensagensLayoutModule
  ]
})
export class ReceptorModule { }
