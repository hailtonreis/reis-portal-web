import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {

  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  menuAberto = false;

  alternarMenu(): void {
    this.menuAberto = !this.menuAberto;
  }

  get mostrarBotaoVoltarInicio(): boolean {
    const rotaAtual = this.router.url;
    return rotaAtual === '/login'
        || rotaAtual === '/cadastro';
  }

  get mostrarBotaoEntrar(): boolean {

    return !this.mostrarBotaoVoltarInicio
        && !this.authService.isAuthenticated();
  }

  get mostrarBotaoSair(): boolean {
    return this.authService.isAuthenticated();
  }

  logout(): void {
    this.authService.logout();
    this.menuAberto = false;
    this.router.navigate(['/']);
  }

  voltarAoTopo(event: Event): void {
  event.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
}