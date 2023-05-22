import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemService } from 'src/app/service/mensagem/mensagem.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MenuEsquerdoOperacoesComponent } from '../menu-esquerdo-operacoes/menu-esquerdo-operacoes.component';
import { MenuEsquerdoService } from '../menu-esquerdo-operacoes/menu-esquerdo.service';

@Component({
  selector: 'app-cadastrar-mensagem-layout',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule],
  templateUrl: './cadastrar-mensagem-layout.component.html',
  styleUrls: ['./cadastrar-mensagem-layout.component.scss']
})
export class CadastrarMensagemLayoutComponent {

  mensagemGroup = new FormGroup({
    assunto: new FormControl('', Validators.required),
    duracao: new FormControl<number|string|null>('', Validators.required),
    mensagem: new FormControl('', Validators.required)
  })

  constructor(
    protected mensagem: MensagemService,
    protected esquerdo: MenuEsquerdoService
  ) {

  }

  nome: string = "";

  Enviar(){

    alert(this.esquerdo.megafoneSelecionado?.id);

    if(this.mensagemGroup.invalid){
      return;
    }
  }
  
}
