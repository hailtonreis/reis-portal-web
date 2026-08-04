import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cerimonia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cerimonia.html',
  styleUrl: './cerimonia.scss'
})
export class CerimoniaComponent {


  evento = {

    data: '15 de Maio de 2027',

    cerimonia: {

      titulo: 'Cerimônia',

      local:
        'Igreja Nossa Senhora das Graças',

      cidade:
        'Brasília - DF',

      horario:
        '16h00',

      botao:
        'Ver localização'

    },


    recepcao: {

      titulo:
        'Recepção',

      local:
        'Espaço Jardim Imperial',

      cidade:
        'Brasília - DF',

      horario:
        '18h00',

      botao:
        'Abrir no mapa'

    },


    informacoes: [

      {
        titulo: 'Traje',
        descricao:
          'Esporte fino.'
      },

      {
        titulo: 'Chegada',
        descricao:
          'Recomendamos chegar com 30 minutos de antecedência.'
      },

      {
        titulo: 'Estacionamento',
        descricao:
          'O local possui estacionamento gratuito.'
      },

      {
        titulo: 'Confirmação',
        descricao:
          'Pedimos a gentileza de confirmar sua presença até 30 dias antes da cerimônia.'
      }

    ]

  };


}