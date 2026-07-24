import { Component } from '@angular/core';
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
export class PublicLayout {

}