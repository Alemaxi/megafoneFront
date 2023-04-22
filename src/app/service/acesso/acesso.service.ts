import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioDto } from 'src/app/domain/dto/usuario-dto';
import { GenericService } from '../Generic-service';

@Injectable({
  providedIn: 'root'
})
export class AcessoService extends GenericService {

  usuarioLogado: UsuarioDto | undefined;

  constructor(protected http: HttpClient) { 
    super();
  }

  Entrar(email: string): Observable<UsuarioDto> {
    return this.http.post<UsuarioDto>(`${this.host}Acesso/EntrarUsuario/${email}`, {});
  }
}
