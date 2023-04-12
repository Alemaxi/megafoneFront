import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-megafones-layout',
  templateUrl: './megafones-layout.component.html',
  styleUrls: ['./megafones-layout.component.scss']
})
export class MegafonesLayoutComponent implements OnInit {

  itens = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  @Output() abrir = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  Abrir(){
    this.abrir.emit(true);
  }
}
