import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { MegafoneDTO } from 'src/app/domain/dto/megafone-dto';
import { CadastrarMensagemLayoutComponent } from '../cadastrar-mensagem-layout/cadastrar-mensagem-layout.component';
import { MenuEsquerdoService } from '../menu-esquerdo-operacoes/menu-esquerdo.service';

@Component({
  selector: 'app-mensagens-layout',
  templateUrl: './mensagens-layout.component.html',
  styleUrls: ['./mensagens-layout.component.scss']
})
export class MensagensLayoutComponent implements OnInit {

  @Input() mostrarExcluir: boolean = true;
  @Input() mostrarEditar: boolean = true;
  @Input() mostrarPostar: boolean = true;
  @Input() megafoneSelecionado: MegafoneDTO | undefined;

  @Input() aberto: boolean = true;
  @Output() abertoChange = new EventEmitter<boolean>();

  @Output() abrirEditar = new EventEmitter();
  @Output() abrirExcluir = new EventEmitter();
  
  constructor(
    protected esquerdo: MenuEsquerdoService,
    protected viewContainer: ViewContainerRef
    ) {

   }

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

  CriarMensagem(){
    var ref = this.viewContainer.createComponent(CadastrarMensagemLayoutComponent);
    this.esquerdo.titulo = "Cadastrar Mensagem"
    this.esquerdo.megafoneSelecionado = this.megafoneSelecionado;
    this.esquerdo.Abrir(ref.hostView);
  }
}
