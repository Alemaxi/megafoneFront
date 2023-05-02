import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CriarMegafoneDto } from 'src/app/domain/dto/criar-megafone-dto';
import { AcessoService } from 'src/app/service/acesso/acesso.service';
import { MegafoneService } from 'src/app/service/megafone/megafone.service';

@Component({
  selector: 'app-criar-megafone',
  templateUrl: './criar-megafone.component.html',
  styleUrls: ['./criar-megafone.component.scss']
})
export class CriarMegafoneComponent implements OnInit {

  constructor(
    protected megafone: MegafoneService,
    protected acesso: AcessoService,
  ) { }

  @Input() aberto: boolean = false;
  @Output() abertoChange = new EventEmitter<boolean>();
  @Output() atualizarMegafones = new EventEmitter();

  criarGroup = new FormGroup({
    nomeMegafone: new FormControl('',Validators.required),
    descricao: new FormControl('',Validators.required)
  })

  ngOnInit(): void {
  }
  
  Abrir() {
    this.aberto = true;
  }

  Fechar(){
    this.criarGroup.reset();
    this.aberto = false;
    this.abertoChange.emit(this.aberto);
  }

  CriarMegafone(){
    if (this.criarGroup.invalid){
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
        this.atualizarMegafones.emit();
      }
    });
  }

  get NomeMegafone(): FormControl {
    return this.criarGroup.get('nomeMegafone') as FormControl;
  }

  get Descricao() {
    return this.criarGroup.get('descricao') as FormControl;
  }
}
