import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortalVisitasService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'https://api.hailtonreis.tech/visitas';

  obterTotalVisitas(): Observable<number> {
    return this.http.get<number>(this.apiUrl);
  }

  registrarVisita(): Observable<number> {
    return this.http.post<number>(this.apiUrl, {});
  }

}