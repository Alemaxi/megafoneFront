import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagens-layout',
  templateUrl: './mensagens-layout.component.html',
  styleUrls: ['./mensagens-layout.component.scss']
})
export class MensagensLayoutComponent implements OnInit {

  @Input() aberto: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
