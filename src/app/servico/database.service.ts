import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anotacao } from '../model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  readonly API = 'http://localhost:3000/anotacoes/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  consulta() {
    return this.http.get<Anotacao[]>(this.API)
  }

  cadastro(dados: any) {
    return this.http.post(this.API, dados, this.httpOptions).subscribe();
  }

  editar(dados: any, id: any) {
    return this.http.put(this.API + id, dados, this.httpOptions).subscribe();
  }

  excluir(id: any) {
    return this.http.delete(this.API + id).subscribe();
  }

}
