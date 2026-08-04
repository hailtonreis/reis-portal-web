import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { HistoriaComponent } from './components/historia/historia';
import { CerimoniaComponent } from './components/cerimonia/cerimonia';
import { CommonModule } from '@angular/common';
import { GaleriaComponent } from './components/galeria/galeria';
import { PresentesComponent } from './components/presentes/presentes';
import { MensagensComponent } from './components/mensagens/mensagens';

@Component({
  selector: 'app-casamento',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    HistoriaComponent,
    CerimoniaComponent,
    GaleriaComponent,
    PresentesComponent,
    MensagensComponent
  ],
  templateUrl: './casamento.html',
  styleUrl: './casamento.scss',
})
export class CasamentoComponent {

}
