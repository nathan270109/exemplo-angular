import { Component, inject, signal } from '@angular/core';
import { UsuarioPut } from './usuario-put';
import { form, FormField } from '@angular/forms/signals';
import { ServiceApi } from '../../services/service-api';

@Component({
  selector: 'app-formulario-put',
  imports: [FormField],
  templateUrl: './formulario-put.html',
  styleUrl: './formulario-put.css',
})
export class FormularioPut {

  protected readonly serviceFormulario = inject(ServiceApi);
 
  protected usuarioModel = signal<UsuarioPut>({
    id: null,
    userId: null,
    title: '',
    body: ''
  })

  protected usuarioForm = form(this.usuarioModel);

  //////////////////////

  protected atualizarPost(event: SubmitEvent) {
    event.preventDefault();

    this.serviceFormulario.atualizarPost(this.usuarioModel()).subscribe({
      next: (response) => {
        alert('Atualização deu certo para a id' + response.id);

        this.usuarioModel.set({
          id: null,
          userId: null,
          title: '',
          body: ''
        })
        this.usuarioForm().reset();
      },
      error: () => {
        alert('Algo deu errado')
      }
    })
  }
}
