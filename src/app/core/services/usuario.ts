import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UsuarioLogado {

  id: number;

  nome: string;

  username: string;

  email: string;

  role: string;

}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //private readonly API = 'http://localhost:8080/usuarios';
  private readonly API = 'https://api.hailtonreis.tech/usuarios';

  private http = inject(HttpClient);

  obterUsuarioLogado(): Observable<UsuarioLogado> {

    return this.http.get<UsuarioLogado>(
      `${this.API}/me`
    );

  }

}