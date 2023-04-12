import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MegafonesComponent } from './megafones/megafones.component';
import { MensageiroRouterModule } from './mensageiro-router.module';
import { MegafonesLayoutModule } from 'src/app/shared/layout/megafones-layout/megafones-layout.module';


@NgModule({
  declarations: [
    MegafonesComponent
  ],
  imports: [
    CommonModule,
    MensageiroRouterModule,
    MegafonesLayoutModule
  ]
})
export class MensageiroModule { }
