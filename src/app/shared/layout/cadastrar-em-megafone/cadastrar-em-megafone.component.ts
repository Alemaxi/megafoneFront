import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MegafoneService } from 'src/app/service/megafone/megafone.service';
import { AcessoService } from 'src/app/service/acesso/acesso.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CadastrarEmMegafoneDTO } from '../../../domain/dto/cadastrar-em-megafone-dto';

@Component({
  selector: 'app-cadastrar-em-megafone',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './cadastrar-em-megafone.component.html',
  styleUrls: ['./cadastrar-em-megafone.component.scss']
})
export class CadastrarEmMegafoneComponent {

  constructor(
    protected megafone: MegafoneService,
    protected acesso: AcessoService,
  ) { }

  @Input() aberto: boolean = false;
  @Output() abertoChange = new EventEmitter<boolean>();
  @Output() atualizarMicrofones = new EventEmitter();

  criarGroup = new FormGroup({
    codigoMegafone: new FormControl('',Validators.required)
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
    this.atualizarMicrofones.emit();
  }

  CadastrarEmMegafone(){
    if (this.criarGroup.invalid){
      return;
    }
    
    let item = new CadastrarEmMegafoneDTO();
    item.idMegafone = Number(this.CodigoMegafone.value);
    item.idReceptor = this.acesso.usuarioLogado?.id;

    this.megafone.CadastrarEmMegafone(item).subscribe( x => {
      this.Fechar();
    });
  }

  get CodigoMegafone(): FormControl {
    return this.criarGroup.get('codigoMegafone') as FormControl;
  }

}
