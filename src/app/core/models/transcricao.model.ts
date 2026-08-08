export interface TranscriptionStatistics {
  palavras: number;
  caracteres: number;
}

export interface TranscriptionData {
  arquivo: string;
  modelo: string;
  idioma: string;
  tempo_processamento_segundos: number;
  estatisticas: TranscriptionStatistics;
  texto: string;
}

export interface TranscriptionResponse {
  success: boolean;
  message: string;
  data: TranscriptionData;
}

