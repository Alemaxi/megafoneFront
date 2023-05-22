import { Component, EventEmitter, Input, Output, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuEsquerdoService } from './menu-esquerdo.service';
import { EsquerdoDirective } from './esquerdo.directive';

@Component({
  selector: 'app-menu-esquerdo-operacoes',
  standalone: true,
  imports: [CommonModule, EsquerdoDirective],
  templateUrl: './menu-esquerdo-operacoes.component.html',
  styleUrls: ['./menu-esquerdo-operacoes.component.scss'],
})
export class MenuEsquerdoOperacoesComponent implements OnInit, AfterViewInit {
  
  @ViewChild(EsquerdoDirective,{static:true}) esquerdoOpcoes!: EsquerdoDirective;

  constructor(
    public esquerdo: MenuEsquerdoService,)
  {

  }
  ngAfterViewInit(): void {
    this.esquerdo.abrir.subscribe(x => {
      this.esquerdoOpcoes.viewRef.clear();
      this.esquerdoOpcoes.viewRef.insert(x);

      this.aberto = true;
      this.abertoChange.emit(this.aberto);
    })

    this.esquerdo.fechar.subscribe(x => {
      this.Fechar();
      this.atualizarMegafones.emit();
    })
  }

  ngOnInit(): void {
  }




  @Input() aberto: boolean = false;
  @Output() abertoChange = new EventEmitter<boolean>();
  @Output() atualizarMegafones = new EventEmitter();

  Fechar(){
    this.aberto = false;
    this.abertoChange.emit(this.aberto);
  }
}
