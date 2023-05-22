import { Component, EventEmitter, Injectable, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { MegafoneDTO } from 'src/app/domain/dto/megafone-dto';

@Injectable({
  providedIn: 'root'
})
export class MenuEsquerdoService {

  abrir = new EventEmitter<ViewRef>();
  fechar = new EventEmitter();
  titulo: string = "Titulo";
  megafoneSelecionado: MegafoneDTO | undefined;

  constructor() { }

  Abrir(view:ViewRef)
  {
    this.abrir.emit(view);
  }
}
