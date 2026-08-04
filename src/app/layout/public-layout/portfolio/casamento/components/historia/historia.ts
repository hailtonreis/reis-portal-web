import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-historia',
  imports: [CommonModule],
  templateUrl: './historia.html',
  styleUrl: './historia.scss',
})
export class HistoriaComponent {

  historia = {
  titulo: '',
  descricao: '',
  foto: '',
  eventos: []
 }

 casal = {
    nome: 'Lucas & Beatriz',
    foto: 'assets/images/nossa-historia.jpg'
};


eventos = [
  {
    icone: '♡',
    titulo: 'Como nos conhecemos',
    descricao: 'Um encontro inesperado que mudou completamente nossas vidas.'
  },
  {
    icone: '◇',
    titulo: 'O pedido',
    descricao: 'Um dos momentos mais emocionantes da nossa história.'
  },
  {
    icone: '∞',
    titulo: 'O grande dia',
    descricao: 'Agora chegou o momento de celebrar esse novo capítulo.'
  }
]


}
