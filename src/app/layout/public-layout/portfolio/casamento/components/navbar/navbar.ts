import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {


  menuAberto = false;


  alternarMenu(): void {
    this.menuAberto = !this.menuAberto;
  }


  menuItems = [
    {
      label: 'Início',
      link: '#inicio'
    },
    {
      label: 'Nossa História',
      link: '#historia'
    },
    {
      label: 'Cerimônia',
      link: '#cerimonia'
    },
    {
      label: 'Galeria',
      link: '#galeria'
    },
    {
      label: 'Presentes',
      link: '#presentes'
    },
    {
      label: 'Mensagens',
      link: '#mensagens'
    }
  ];

}