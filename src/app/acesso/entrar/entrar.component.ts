import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AcessoService } from 'src/app/service/acesso/acesso.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.scss']
})
export class EntrarComponent implements OnInit {

  constructor(
    protected acessoService: AcessoService,
    protected router: Router
    ) { }

  entrarGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  ngOnInit(): void {
    this.emailControl.touched
  }

  public Entrar(): void{

    if(this.entrarGroup.invalid){
      return;
    }

    this.acessoService.Entrar(this.emailControl.value).subscribe({
      next: (data) => {
        
        this.acessoService.usuarioLogado = data;

        this.router.navigate(['/usuario']);
      }
    });
  }

  get emailControl(): FormControl {
    return this.entrarGroup.get('email') as FormControl;
  }
}
