import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent implements OnInit, OnDestroy {

   casamento = {
      noivo: 'Lucas',
      noiva: 'Beatriz',
      data: '15 de Maio de 2027',
      dataEvento: new Date('2027-05-10T16:00:00'),
      frase:
        'Depois de muitos capítulos escritos por Deus, chegou o momento de celebrarmos o início da nossa maior aventura.'
    };

    contador = {
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0
      };

  private intervalo?: ReturnType<typeof setInterval>;
  
  ngOnInit(): void {
    this.calcularContagem();
    this.intervalo = setInterval(() => {
      this.calcularContagem();
    }, 1000);
  }

 calcularContagem(): void {

    const agora = new Date().getTime();

    const dataCasamento =
      this.casamento.dataEvento.getTime();

      const distancia =
      dataCasamento - agora;

    if (distancia <= 0) {
      this.contador = {
        dias: 0,
        horas: 0,
        minutos: 0,
        segundos: 0
      };
      return;
    }

    this.contador.dias =
      Math.floor(
        distancia / (1000 * 60 * 60 * 24)
      );

    this.contador.horas =
      Math.floor(
        (distancia %
          (1000 * 60 * 60 * 24))
          /
          (1000 * 60 * 60)
      );

    this.contador.minutos =
      Math.floor(
        (distancia %
          (1000 * 60 * 60))
          /
          (1000 * 60)
      );

    this.contador.segundos =
      Math.floor(
        (distancia %
          (1000 * 60))
          /
          1000
      );
  }

 ngOnDestroy(): void {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }
}
