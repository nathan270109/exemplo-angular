import { Component, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

import { Usuario } from './usuario';
import { CadastroAlunosService } from '../cadastro-alunos/cadastro-alunos-service';
import { FormularioApiService } from '../services/post/formulario-api-service';

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

    

    this.servicoFormulario.cadastrarPostDoService(post).subscribe({
      next: (PostUsuario) => {

        console.log("cadastrado" + PostUsuario.id);

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
