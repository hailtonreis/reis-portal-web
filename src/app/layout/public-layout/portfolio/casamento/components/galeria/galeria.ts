import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './galeria.html',
  styleUrl: './galeria.scss'
})
export class GaleriaComponent {
  galeria = {
    titulo: 'Alguns momentos da nossa história',
    descricao:
      'Cada fotografia representa um capítulo da nossa caminhada. Esperamos que você possa celebrar conosco este momento tão especial.',
   fotos: [

  {
    imagem: 'assets/images/momentos-casal-01.webp',
    descricao: 'Momento especial'
  },

  {
    imagem: 'assets/images/momentos-casal-02.webp',
    descricao: 'Momento especial'
  },

  {
    imagem: 'assets/images/momentos-casal-03.webp',
    descricao: 'Momento especial'
  },

  {
    imagem: 'assets/images/momentos-casal-04.webp',
    descricao: 'Momento especial'
  },

  {
    imagem: 'assets/images/momentos-casal-05.webp',
    descricao: 'Momento especial'
  },

  {
    imagem: 'assets/images/momentos-casal-06.webp',
    descricao: 'Momento especial'
  }

]
  };
}