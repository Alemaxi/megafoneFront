import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CriarMensagemDTO } from 'src/app/domain/dto/criar-mensagem-dto';
import { GenericService } from '../Generic-service';

@Injectable({
  providedIn: 'root'
})
export class MensagemService extends GenericService {

  constructor(
    protected http:HttpClient
  ) {
    super()
   }

  EnviarMensagem(mensagem: CriarMensagemDTO): Observable<any>{
    return this.http.post(`${this.host}Mensagem`,mensagem);
  }
}
