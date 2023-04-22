import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mensagens-layout',
  templateUrl: './mensagens-layout.component.html',
  styleUrls: ['./mensagens-layout.component.scss']
})
export class MensagensLayoutComponent implements OnInit {

  @Input() aberto: boolean = true;
  @Output() abertoChange = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  Fechar() {
    this.aberto = false;
    this.abertoChange.emit(this.aberto);
  }

}
