import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MegafoneDTO } from 'src/app/domain/dto/megafone-dto';
import { MenuEsquerdoService } from '../menu-esquerdo-operacoes/menu-esquerdo.service';

@Component({
  selector: 'app-megafones-layout',
  templateUrl: './megafones-layout.component.html',
  styleUrls: ['./megafones-layout.component.scss']
})
export class MegafonesLayoutComponent implements OnInit {

  @Input() mostrarQuantidade: boolean = true;
  @Input() mostrarAdd: boolean = false;
  @Input() mostrarAtualizar: boolean = true;
  @Input() megafones: MegafoneDTO[] = [];

  @Output() abrir = new EventEmitter<MegafoneDTO>();
  @Output() abrirCriar = new EventEmitter()
  @Output() carregarMegafones = new EventEmitter();

  filterControl = new FormControl('')

  constructor(
    protected esquerdo: MenuEsquerdoService
  ) {
    var auxMegafone: MegafoneDTO = {
      descricao: "Descricao",
      id: 1,
      nome: "Nome",
      quantidadeMensagens: 9
    }

    this.megafones.push(...[auxMegafone, auxMegafone, auxMegafone, auxMegafone, auxMegafone]);
    this.megafones.push(...[auxMegafone, auxMegafone, auxMegafone, auxMegafone, auxMegafone]);
    this.megafones.push(...[auxMegafone, auxMegafone, auxMegafone, auxMegafone, auxMegafone]);
    this.megafones.push(...[auxMegafone, auxMegafone, auxMegafone, auxMegafone, auxMegafone]);
    this.megafones.push(...[auxMegafone, auxMegafone, auxMegafone, auxMegafone, auxMegafone]);
    this.megafones.push(...[auxMegafone, auxMegafone, auxMegafone, auxMegafone, auxMegafone]);
    this.megafones.push(...[auxMegafone, auxMegafone, auxMegafone, auxMegafone, auxMegafone]);

    this.esquerdo.fechar.subscribe(x => {
      this.AtualizarMegafones();
    })
  }

  ngOnInit(): void {
  }

  Abrir(megafone:MegafoneDTO) {
    this.abrir.emit(megafone);
  }

  AbrirCriar() {
    this.abrirCriar.emit();
  }

  AtualizarMegafones() {
    this.carregarMegafones.emit();
  }

  ObterMegafonesParaDisplay(): MegafoneDTO[] {
    return this.megafones.filter(x => x.nome?.includes(this.filterControl.value as string))
  }

  ObterQuantidade(megafone:MegafoneDTO):Number{
    return Number(megafone.quantidadeMensagens)>9?9:Number(megafone.quantidadeMensagens);
  }
}
