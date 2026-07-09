import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  UsuarioLogado,
  UsuarioService
} from '../../core/services/usuario';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {

  usuario?: UsuarioLogado;

  private usuarioService = inject(UsuarioService);

  ngOnInit(): void {

    this.usuarioService
      .obterUsuarioLogado()
      .subscribe({

        next: usuario => {

          console.log(usuario);

          this.usuario = usuario;

        },

        error: erro => {

          console.error(erro);

        }

      });

  }

}