import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Mensagem {
  nome: string;
  texto: string;
  data: Date;
}

@Component({
  selector: 'app-mensagens',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './mensagens.html',
  styleUrl: './mensagens.scss'
})
export class MensagensComponent {

  nome = '';

  texto = '';

  mensagens: Mensagem[] = [

    {
      nome: 'Maria Fernanda',
      texto: 'Que Deus continue abençoando essa linda união. Muitas felicidades!',
      data: new Date('2026-08-01T18:30:00')
    },

    {
      nome: 'Carlos Henrique',
      texto: 'Será uma alegria participar desse momento tão especial. Que Deus esteja sempre presente na caminhada de vocês.',
      data: new Date('2026-08-02T15:10:00')
    },

    {
      nome: 'Família Oliveira',
      texto: 'Desejamos uma vida repleta de amor, paz, saúde e muitas conquistas.',
      data: new Date('2026-08-03T20:45:00')
    }

  ];



  publicarMensagem(): void {

    const nome = this.nome.trim();
    const texto = this.texto.trim();

    if (!nome || !texto) {
      return;
    }

    this.mensagens.unshift({

      nome,

      texto,

      data: new Date()

    });

    this.nome = '';
    this.texto = '';

  }



  formatarData(data: Date): string {

    return new Intl.DateTimeFormat('pt-BR', {

      dateStyle: 'short',

      timeStyle: 'short'

    }).format(data);

  }

}