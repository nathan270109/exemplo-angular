import { Component, inject, signal } from '@angular/core';
import { ServiceForm } from '../services/put/service-form';
import { Usuario } from './usuario';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-formulario-put',
  imports: [FormField],
  templateUrl: './formulario-put.html',
  styleUrl: './formulario-put.css',
})
export class FormularioPut {

  protected readonly serviceFormulario = inject(ServiceForm);
 
  protected usuarioModel = signal<Usuario>({
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
      next: () => {
        alert('Atualização Concluida');

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
