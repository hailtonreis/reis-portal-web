import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { TranscricaoService } from '../../../core/services/transcricao.service';
import { TranscriptionResponse } from '../../../core/models/transcricao.model';
import { HeaderComponent } from '../../header/header';

@Component({
  selector: 'app-reis-ai',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './reis-ai.html',
})
export class ReisAiComponent {

  private readonly transcricaoService = inject(TranscricaoService);
  
  private readonly cdr = inject(ChangeDetectorRef);

  readonly maxFileSizeMb = 300;

  readonly allowedExtensions = [
    '.mp3',
    '.mp4',
    '.wav',
    '.m4a'
  ];

  arquivoSelecionado: File | null = null;

  processando = false;

  resultado: TranscriptionResponse | null = null;

  erro: string | null = null;

  selecionarArquivo(event: Event): void {

    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    const arquivo = input.files[0];

    this.limparEstado();

    if (!this.validarTipoArquivo(arquivo)) {
      return;
    }

    if (!this.validarTamanhoArquivo(arquivo)) {
      return;
    }

    this.arquivoSelecionado = arquivo;
  }

  transcrever(): void {

    if (!this.arquivoSelecionado || this.processando) {
      return;
    }

    this.processando = true;
    this.erro = null;
    this.resultado = null;

    this.transcricaoService
      .transcrever(this.arquivoSelecionado)
      .subscribe({

       next: (resposta) => {
      
        console.log('RESPOSTA DA API:', resposta);

      this.resultado = resposta;
      this.erro = null;
      this.processando = false;

      this.cdr.markForCheck();
    },

        error: (erro: HttpErrorResponse) => {
          
          console.error('ERRO NA TRANSCRIÇÃO:', erro);

          this.processando = false;
          this.resultado = null;

          this.tratarErro(erro);

          this.cdr.markForCheck();
        }
      });
  }

  baixarTexto(): void {

    if (!this.resultado?.data?.texto) {
      return;
    }

    const texto = this.resultado.data.texto;

    const blob = new Blob(
      [texto],
      { type: 'text/plain;charset=utf-8' }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');

    link.href = url;
    link.download = this.obterNomeArquivoTexto();

    link.click();

    URL.revokeObjectURL(url);
  }

  limpar(): void {

    this.arquivoSelecionado = null;
    this.resultado = null;
    this.erro = null;
    this.processando = false;
  }

  private validarTipoArquivo(arquivo: File): boolean {

    const nomeArquivo = arquivo.name.toLowerCase();

    const extensaoPermitida = this.allowedExtensions.some(
      extensao => nomeArquivo.endsWith(extensao)
    );

    if (!extensaoPermitida) {

      this.erro =
        'Tipo de arquivo não suportado. ' +
        'Formatos aceitos: MP3, MP4, WAV e M4A.';

      return false;
    }

    return true;
  }

  private validarTamanhoArquivo(arquivo: File): boolean {

    const tamanhoMb = arquivo.size / (1024 * 1024);

    if (tamanhoMb > this.maxFileSizeMb) {

      this.erro =
        `Arquivo muito grande. ` +
        `Máximo permitido: ${this.maxFileSizeMb} MB.`;

      return false;
    }

    return true;
  }

  private tratarErro(erro: HttpErrorResponse): void {

    if (erro.status === 400) {

      if (erro.error?.detail) {
        this.erro = erro.error.detail;
        return;
      }

      this.erro = 'Arquivo inválido.';
      return;
    }

    if (erro.status === 0) {

      this.erro =
        'Não foi possível conectar ao serviço de transcrição. ' +
        'Verifique se a API está funcionando.';

      return;
    }

    this.erro =
      'Não foi possível realizar a transcrição. ' +
      'Tente novamente.';
  }

  private obterNomeArquivoTexto(): string {

    if (!this.arquivoSelecionado) {
      return 'transcricao.txt';
    }

    const nome = this.arquivoSelecionado.name;

    const ultimoPonto = nome.lastIndexOf('.');

    if (ultimoPonto === -1) {
      return `${nome}.txt`;
    }

    return `${nome.substring(0, ultimoPonto)}.txt`;
  }

  private limparEstado(): void {

    this.arquivoSelecionado = null;
    this.resultado = null;
    this.erro = null;
    this.processando = false;
  }
}
