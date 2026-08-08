import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TranscriptionResponse } from '../models/transcricao.model';

@Injectable({
  providedIn: 'root'
})
export class TranscricaoService {

  private readonly http = inject(HttpClient);

  //private readonly apiUrl = 'http://localhost:8000/transcription';
  private readonly apiUrl = 'https://ai.hailtonreis.tech/transcription';

  transcrever(arquivo: File): Observable<TranscriptionResponse> {

    const formData = new FormData();

    formData.append('arquivo', arquivo);

    return this.http.post<TranscriptionResponse>(
      this.apiUrl,
      formData
    );
  }
}

