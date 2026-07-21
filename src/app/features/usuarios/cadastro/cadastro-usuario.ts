import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../core/services/usuario';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../layout/header/header';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HeaderComponent
  ],
  templateUrl: './cadastro-usuario.html',
  styleUrl: './cadastro-usuario.scss'
})
export class CadastroUsuarioComponent {

  private readonly fb = inject(FormBuilder);
  private readonly usuarioService = inject(UsuarioService);
  private readonly router = inject(Router);

  mensagemErro = '';
  carregando = false;

  formulario = this.fb.group({
    nome: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', [
                  Validators.required,
                  Validators.email
                ]
    ],
    senha: ['', Validators.required],
    confirmarSenha: ['', Validators.required]
  });

  cadastrar(): void {
    this.mensagemErro = '';
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }
    const dados = this.formulario.getRawValue();

    if (dados.senha !== dados.confirmarSenha) {
      this.mensagemErro = 'As senhas não conferem.';
      return;
    }
    this.carregando = true;

    this.usuarioService.cadastrar({
      nome: dados.nome!,
      username: dados.username!,
      email: dados.email!,
      senha: dados.senha!

    }).subscribe({
      next: () => {
        this.carregando = false;
        alert('Usuário cadastrado com sucesso!');
        this.router.navigate(['/login']);
      },

      error: (erro) => {
        console.error(erro);
        this.carregando = false;
        if (erro.error?.message) {
          this.mensagemErro = erro.error.message;
        } else {
          this.mensagemErro = 'Erro ao cadastrar usuário.';
        }
      }
    });
  }
}