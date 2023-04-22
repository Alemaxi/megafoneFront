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
    protected acesso: AcessoService,
    protected megafone: MegafoneService
  ) { }

  ngOnInit(): void {
    this.CarregarMegafones();
  }

  Abrir() {
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
}
