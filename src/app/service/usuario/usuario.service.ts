import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UsuarioDto } from 'src/app/domain/dto/usuario-dto';
import { GenericService } from '../Generic-service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends GenericService {

  constructor(protected http: HttpClient) { 
    super();
  }

  public Adiconar(usuario: UsuarioDto): Observable<any>{
    return this.http.post<any>(`${this.host}usuario`, usuario);
  }

  public Atualizar(usuario: UsuarioDto): Observable<any>{
    return this.http.put<any>(`${this.host}usuario`, usuario);
  }

  public obter(id: number): Observable<any>{
    return this.http.get<any>(`${this.host}usuario/${id}` + id);
  }
}
