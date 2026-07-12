import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import { LoginRequest } from '../models/login-request';
import { LoginResponse } from '../models/login-response';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //private readonly API = 'http://localhost:8080/auth';
  private readonly API = 'https://hailtonreis.tech/auth';

  private http = inject(HttpClient);

  private tokenService = inject(TokenService);

  login(request: LoginRequest): Observable<LoginResponse> {

    return this.http
      .post<LoginResponse>(`${this.API}/login`, request)
      .pipe(
        tap(response => {

          this.tokenService.salvarToken(response.token);

        })
      );

  }

  logout(): void {

    this.tokenService.removerToken();

  }

}