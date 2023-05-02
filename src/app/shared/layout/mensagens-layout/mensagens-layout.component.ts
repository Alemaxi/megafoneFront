import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mensagens-layout',
  templateUrl: './mensagens-layout.component.html',
  styleUrls: ['./mensagens-layout.component.scss']
})
export class MensagensLayoutComponent implements OnInit {

  @Input() mostrarExcluir: boolean = true;
  @Input() mostrarEditar: boolean = true;
  @Input() mostrarPostar: boolean = true;

  @Input() aberto: boolean = true;
  @Output() abertoChange = new EventEmitter<boolean>();

  @Output() abrirEditar = new EventEmitter();
  @Output() abrirExcluir = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  Fechar() {
    this.aberto = false;
    this.abertoChange.emit(this.aberto);
  }

  AbrirEditarMegafone(){
    this.abrirEditar.emit();
  }

  AbrirExcluirMegafone(){
    this.abrirExcluir.emit();
  }
}
