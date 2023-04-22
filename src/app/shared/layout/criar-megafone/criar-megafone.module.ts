import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CriarMegafoneComponent } from './criar-megafone.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CriarMegafoneComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    CriarMegafoneComponent
  ]
})
export class CriarMegafoneModule { }
