import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MegafonesLayoutComponent } from './megafones-layout.component';
import { ReactiveFormsModule } from '@angular/forms';

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
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [
    MegafonesLayoutComponent
  ]
})
export class MegafonesLayoutModule { }
