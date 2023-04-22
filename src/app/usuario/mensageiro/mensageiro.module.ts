import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MegafonesComponent } from './megafones/megafones.component';
import { MensageiroRouterModule } from './mensageiro-router.module';
import { MegafonesLayoutModule } from 'src/app/shared/layout/megafones-layout/megafones-layout.module';
import { MensagensLayoutModule } from '../../shared/layout/mensagens-layout/mensagens-layout.module'
import { CriarMegafoneModule } from '../../shared/layout/criar-megafone/criar-megafone.module';


@NgModule({
  declarations: [
    MegafonesComponent
  ],
  imports: [
    CommonModule,
    MensageiroRouterModule,
    MegafonesLayoutModule,
    MensagensLayoutModule,
    CriarMegafoneModule
  ]
})
export class MensageiroModule { }
