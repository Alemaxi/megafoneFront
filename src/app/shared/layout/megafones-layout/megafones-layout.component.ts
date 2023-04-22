import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MegafoneDTO } from 'src/app/domain/dto/megafone-dto';

@Component({
  selector: 'app-megafones-layout',
  templateUrl: './megafones-layout.component.html',
  styleUrls: ['./megafones-layout.component.scss']
})
export class MegafonesLayoutComponent implements OnInit {

  itens = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

  @Input() mostrarQuantidade: boolean = true;
  @Input() mostrarAdd: boolean = false;
  @Input() mostrarAtualizar: boolean = true;
  @Input() megafones: MegafoneDTO[] = [];

  @Output() abrir = new EventEmitter<boolean>();
  @Output() abrirCriar = new EventEmitter()
  @Output() carregarMegafones = new EventEmitter();

  filterControl = new FormControl('')

  constructor() {
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
  }

  ngOnInit(): void {
  }

  Abrir() {
    this.abrir.emit(true);
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
}
