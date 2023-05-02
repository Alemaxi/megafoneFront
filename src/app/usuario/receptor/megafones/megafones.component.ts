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

  megafones: MegafoneDTO[] = [];

  constructor(
    protected megafone: MegafoneService,
    protected acesso: AcessoService,
    ) { }

  ngOnInit(): void {
    this.BuscarMegafones();
  }

  Abrir(megafone: MegafoneDTO) {
    this.aberto = true;
  }

  AbrirCadastrar() {
    this.abertoCriar = true;
  }

  AtualizarTela() {
    this.BuscarMegafones();
  }

  BuscarMegafones(): void {
    this.megafone.ObterMegafonesReceptor(Number(this.acesso.usuarioLogado?.id))
    .subscribe(x => {
      this.megafones = x;
    });
  }

}
