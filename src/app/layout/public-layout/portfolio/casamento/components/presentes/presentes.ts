import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-presentes',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './presentes.html',
  styleUrl: './presentes.scss',
})
export class PresentesComponent {
 presentes = {


    titulo:
      'Um carinho especial para nós',


    descricao:
      'Sua presença já é o maior presente. Mas, se desejar nos presentear, preparamos algumas opções para facilitar esse momento.',



    opcoes: [

      {
        icone: '♡',

        titulo:
          'Lista de Presentes',

        descricao:
          'Escolha um presente da nossa lista especial preparada com muito carinho.',

        botao:
          'Ver presentes'

      },


      {
        icone: '◇',

        titulo:
          'Presente via Pix',

        descricao:
          'Caso prefira, disponibilizamos uma opção rápida e segura para contribuir com nossa nova fase.',

        botao:
          'Ver chave Pix'

      },


      {
        icone: '✦',

        titulo:
          'Presentes Sugeridos',

        descricao:
          'Algumas ideias para quem deseja participar desse novo capítulo das nossas vidas.',

        botao:
          'Ver sugestões'

      }


    ],



    pix: {


      titulo:
        'Contribua com nosso sonho',


      descricao:
        'Cada gesto de carinho fará parte da construção da nossa história juntos.',


      chave:
        'casamento.lucas.beatriz@email.com'


    }


  };
}
