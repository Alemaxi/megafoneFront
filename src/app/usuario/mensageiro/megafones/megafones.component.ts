import { Component, OnInit } from '@angular/core';
import { MegafoneDTO } from 'src/app/domain/dto/megafone-dto';
import { AcessoService } from 'src/app/service/acesso/acesso.service';
import { MegafoneService } from 'src/app/service/megafone/megafone.service';

@Component({
  selector: 'app-megafones',
  templateUrl: './megafones.component.html',
  styleUrls: ['./megafones.component.scss']
})
export class MegafonesComponent implements OnInit {

  aberto: boolean = false;
  abertoCriar: boolean = false;
  abertoEditar: boolean = false;
  megafoneSelecionado: MegafoneDTO = new MegafoneDTO();

  megafones: MegafoneDTO[] = [];

  constructor(
    protected acesso: AcessoService,
    protected megafone: MegafoneService
  ) { }

  ngOnInit(): void {
    this.CarregarMegafones();
  }

  Abrir(megafone: MegafoneDTO) {
    this.megafoneSelecionado = megafone;
    this.aberto = true;
  }

  AbrirCriar(){
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
