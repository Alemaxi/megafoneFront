import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MegafonesLayoutComponent } from './megafones-layout.component';

//Angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    MegafonesLayoutComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule
  ],
  exports: [
    MegafonesLayoutComponent
  ]
})
export class MegafonesLayoutModule { }
