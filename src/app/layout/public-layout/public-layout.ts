import { Component, OnInit, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { PortalVisitasService } from '../../core/services/portal-visitas.service';

import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header';
import { SolucoesComponent } from './solucoes/solucoes';
import { SegmentosCompoennt } from './segmentos/segmentos';
import { PortfolioComponent } from './portfolio/portfolio';
import { SobreComponent } from './sobre/sobre';
import { ContatoComponent } from './contato/contato';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SolucoesComponent,
    SegmentosCompoennt,
    PortfolioComponent,
    SobreComponent,
    ContatoComponent
  ],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.scss'
})
export class PublicLayout implements OnInit {

  private readonly portalVisitasService = inject(PortalVisitasService);
  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const visitaRegistrada = sessionStorage.getItem('visita-registrada');

    if (visitaRegistrada) {
      return;
    }

    this.portalVisitasService.registrarVisita().subscribe({
      next: () => {
        sessionStorage.setItem('visita-registrada', 'true');
      },
      error: (erro) => {
        console.error('ERRO AO REGISTRAR VISITA:', erro);
      }
    });
  }

}