import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CadastrarEmMegafoneDTO } from 'src/app/domain/dto/cadastrar-em-megafone-dto';
import { CriarMegafoneDto } from 'src/app/domain/dto/criar-megafone-dto';
import { MegafoneDTO } from 'src/app/domain/dto/megafone-dto';
import { GenericService } from '../Generic-service';

@Injectable({
  providedIn: 'root'
})
export class MegafoneService extends GenericService {

  constructor(
    protected http: HttpClient
    ) { 
    super();
  }

  ObterMegafonesMensageiro(idMensageiro: number): Observable<MegafoneDTO[]>{
    return this.http.get<MegafoneDTO[]>(`${this.host}MegaFone/mensageiro/${idMensageiro}`)
  }

  ObterMegafonesReceptor(idReceptor: number): Observable<MegafoneDTO[]> {
    return this.http.get<MegafoneDTO[]>(`${this.host}MegaFone/receptor/${idReceptor}`)
  }

  CriarMegafone(megafone:CriarMegafoneDto): Observable<any> {
    return this.http.post(`${this.host}MegaFone`, megafone);
  }

  CadastrarEmMegafone(cadastro: CadastrarEmMegafoneDTO) {
    return this.http.post<MegafoneDTO[]>(`${this.host}MegaFone/cadastrarEmMegafone`, cadastro)
  }

  RemoverMegafone(id: number) {
    return this.http.delete<MegafoneDTO[]>(`${this.host}MegaFone/${id}`)
  }
}
