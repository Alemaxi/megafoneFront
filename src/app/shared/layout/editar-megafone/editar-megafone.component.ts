import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MegafoneService } from 'src/app/service/megafone/megafone.service';
import { AcessoService } from 'src/app/service/acesso/acesso.service';
import { CriarMegafoneDto } from 'src/app/domain/dto/criar-megafone-dto';
import { MegafoneDTO } from 'src/app/domain/dto/megafone-dto';

@Component({
  selector: 'app-editar-megafone',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './editar-megafone.component.html',
  styleUrls: ['./editar-megafone.component.scss']
})
export class EditarMegafoneComponent implements OnInit {

  @Input() megafoneSelecionado: MegafoneDTO = new MegafoneDTO();

  @Input() aberto: boolean = false;
  @Output() abertoChange = new EventEmitter<boolean>();
  @Output() atualizarMicrofones = new EventEmitter();
  
  editarGroup = new FormGroup({
    nomeMegafone: new FormControl('',Validators.required),
    descricao: new FormControl('',Validators.required)
  })

  constructor(
    protected megafone: MegafoneService,
    protected acesso: AcessoService,
  ) { 
  }

  ngOnInit(): void {
  }

  ObterAberto(): boolean {
    this.NomeMegafone.setValue(this.megafoneSelecionado.nome);
    this.Descricao.setValue(this.megafoneSelecionado.descricao);

    return this.aberto;
  }

  Abrir() {
    this.aberto = true;
  }

  Fechar(){
    this.editarGroup.reset();
    this.aberto = false;
    this.abertoChange.emit(this.aberto);
  }

  AtualizarMegafone(){
    if (this.editarGroup.invalid){
      return;
    }

    
    let megafone: CriarMegafoneDto = {
      descricao: this.Descricao.value,
      nome: this.NomeMegafone.value,
      idMensageiro: this.acesso.usuarioLogado?.id
    }
    
    this.Fechar();
    
    this.megafone.CriarMegafone(megafone).subscribe({
      next: x => {
        this.atualizarMicrofones.emit();
      }
    });
  }

  get NomeMegafone(): FormControl {
    return this.editarGroup.get('nomeMegafone') as FormControl;
  }

  get Descricao() {
    return this.editarGroup.get('descricao') as FormControl;
  }
}
