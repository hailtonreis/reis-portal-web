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

  /**
   * Exibe o botão "Voltar ao início"
   * apenas nas telas de Login e Cadastro.
   */
  get mostrarBotaoVoltarInicio(): boolean {

    const rotaAtual = this.router.url;

    return rotaAtual === '/login'
        || rotaAtual === '/cadastro';
  }

  /**
   * Exibe o botão Entrar
   * apenas para visitantes.
   */
  get mostrarBotaoEntrar(): boolean {

    return !this.mostrarBotaoVoltarInicio
        && !this.authService.isAuthenticated();

  }

  /**
   * Exibe o botão Sair
   * quando o usuário estiver autenticado.
   */
  get mostrarBotaoSair(): boolean {
    return this.authService.isAuthenticated();
  }

  /**
   * Encerra a sessão.
   */
  logout(): void {

    this.authService.logout();

    this.menuAberto = false;

    this.router.navigate(['/']);

  }

}