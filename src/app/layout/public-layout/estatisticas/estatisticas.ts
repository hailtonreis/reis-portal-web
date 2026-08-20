import { Component, OnInit, inject } from '@angular/core';
import { PortalVisitasService } from '../../../core/services/portal-visitas.service';


@Component({
  selector: 'app-estatisticas',
  standalone: true,
  imports: [],
  templateUrl: './estatisticas.html',
  styleUrl: './estatisticas.scss'
})
export class EstatisticasComponent implements OnInit {

  private readonly portalVisitasService = inject(PortalVisitasService);

  totalVisitas = 0;

  ngOnInit(): void {

    this.portalVisitasService
      .obterTotalVisitas()
      .subscribe({
        next: (total) => {
          this.totalVisitas = total;
        },

        error: (erro) => {
          console.error('ERRO AO BUSCAR TOTAL DE VISITAS:', erro);
        }
      });

  }

}