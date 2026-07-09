import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})

export class HeaderComponent {
 menuAberto = false;

  alternarMenu(): void {
    this.menuAberto = !this.menuAberto;
  }}
