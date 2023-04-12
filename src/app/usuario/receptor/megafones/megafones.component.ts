import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-megafones',
  templateUrl: './megafones.component.html',
  styleUrls: ['./megafones.component.scss']
})
export class MegafonesComponent implements OnInit {

  aberto: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  Abrir(aberto:boolean){
    this.aberto = aberto;
  }  

}
