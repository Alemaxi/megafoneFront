import { Component, ComponentFactory, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { MegafoneDTO } from 'src/app/domain/dto/megafone-dto';
import { AcessoService } from 'src/app/service/acesso/acesso.service';
import { MegafoneService } from 'src/app/service/megafone/megafone.service';
import { CadastrarMensagemLayoutComponent } from 'src/app/shared/layout/cadastrar-mensagem-layout/cadastrar-mensagem-layout.component';
import { CriarMegafoneComponent } from 'src/app/shared/layout/criar-megafone/criar-megafone.component';
import { MenuEsquerdoService } from 'src/app/shared/layout/menu-esquerdo-operacoes/menu-esquerdo.service';

@Component({
  selector: 'app-megafones',
  templateUrl: './megafones.component.html',
  styleUrls: ['./megafones.component.scss']
})
export class MegafonesComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef }) container!: ViewContainerRef;

  aberto: boolean = true;
  abertoCriar: boolean = false;
  abertoEditar: boolean = false;
  megafoneSelecionado: MegafoneDTO = new MegafoneDTO();

  megafones: MegafoneDTO[] = [];

  constructor(
    protected acesso: AcessoService,
    protected megafone: MegafoneService,
    protected esquerdo: MenuEsquerdoService,
    protected viewContainer: ViewContainerRef
  ) { }

  ngOnInit(): void {
    this.CarregarMegafones();
  }

  Abrir(megafone: MegafoneDTO) {
    this.megafoneSelecionado = megafone;
    this.aberto = true;
  }

  AbrirCriar(){
    let componentRef = this.viewContainer.createComponent(CriarMegafoneComponent);
    this.esquerdo.titulo = "Criar Megafone";
    this.esquerdo.Abrir(componentRef.hostView);
    this.viewContainer.clear();
    this.abertoCriar = true;
  }

  CarregarMegafones() {
    this.megafone.ObterMegafonesMensageiro(this.acesso.usuarioLogado?.id as number)
    .subscribe({
      next: x => {
        this.megafones = x;
      }
    })
  }

  AbrirExcluir(){
    if(!confirm("Tem certeza que deseja excluir?")){
      return;
    }

    this.megafone.RemoverMegafone(Number(this.megafoneSelecionado.id))
    .subscribe(x => {
      this.CarregarMegafones();
      this.aberto = false;
    });
  }

  AbrirEditar() {
    this.abertoEditar = true;
    this.aberto = false;
  }
}
