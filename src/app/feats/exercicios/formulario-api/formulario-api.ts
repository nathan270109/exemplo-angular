import { Component, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { ServiceApi } from '../../services/service-api';
import { PostUsuario } from './post-usuario';



@Component({
  selector: 'app-formulario-api',
  imports: [FormField],
  templateUrl: './formulario-api.html',
  styleUrl: './formulario-api.css',
})
export class FormularioApi {

  protected readonly servicoFormulario = inject(ServiceApi);

  protected usuarioModel = signal<PostUsuario>({
    id: null,
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

        console.log("cadastrado" + PostUsuario);

        this.usuarioModel.set({
          id: null,
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
