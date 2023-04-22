import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,  } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioService } from '../../service/usuario/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  cadastroGrupo = new FormGroup({
    usuario: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
  })

  constructor(
    protected usuarioService: UsuarioService,
    protected router: Router
    ) { }

  ngOnInit(): void {
  }

  public Adicionar(): void{

    if(this.cadastroGrupo.invalid){
      return;
    }

    alert("testando");

    this.usuarioService.Adiconar({id: undefined ,nome: this.usuarioControl.value, email: this.emailControl.value}).subscribe({
      next: (data) => {
        this.router.navigate(['/acesso/entrar']);
      },
      error: (err) => {
      }
    })
  }


  get usuarioControl(): FormControl {
    return this.cadastroGrupo.get('usuario') as FormControl;
  }

  get emailControl(): FormControl {
    return this.cadastroGrupo.get('email') as FormControl;
  }

}
