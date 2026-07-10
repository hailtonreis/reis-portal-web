import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LucideAngularModule, Eye, EyeOff } from 'lucide-angular';


import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LucideAngularModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  username = '';
  senha = '';
  
  mostrarSenha = false;
  
   Eye = Eye;
  EyeOff = EyeOff;

  mensagemErro = '';
  carregando = false;


  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  entrar(): void {

    this.mensagemErro = '';
    this.carregando = true;

    this.authService.login({
      username: this.username,
      senha: this.senha
    }).subscribe({

      next: (response) => {

        console.log('Login realizado:', response);

        this.carregando = false;

        this.router.navigate(['/sobre/sobre']);

      },

      error: (erro) => {

        console.error('Erro no login:', erro);

        this.mensagemErro = 'Usuário ou senha inválidos';

        this.carregando = false;

      }

    });

  }

}