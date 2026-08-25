import { Component, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { FormularioApiService } from './formulario-api-service';
import { Usuario } from './usuario';
import { CadastroAlunosService } from '../cadastro-alunos/cadastro-alunos-service';

@Component({
  selector: 'app-formulario-api',
  imports: [FormField],
  templateUrl: './formulario-api.html',
  styleUrl: './formulario-api.css',
})
export class FormularioApi {

  protected readonly servicoFormulario = inject(FormularioApiService);

  protected usuarioModel = signal<Usuario>({
    userId: null,
    title: '', 
    body: ''
  });

  protected usuarioForm = form(this.usuarioModel);

  //////////////////

  protected cadastrarUsuario(event: SubmitEvent) {
    event.preventDefault();

    const post = this.usuarioModel();

    console.log(post, "cadastrado");

    this.servicoFormulario.cadastrarPostDoService(post).subscribe({
      next: () => {
        this.usuarioModel.set({
          userId: null,
          title: '',
          body: '',
        });

        this.usuarioForm().reset();
      },

      error: () => {
        console.log('Algo deu errado')
      }

    })


  }

}
