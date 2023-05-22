import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appEsquerdo]',
  standalone: true
})
export class EsquerdoDirective {

  constructor(public viewRef: ViewContainerRef) {
   }

}
