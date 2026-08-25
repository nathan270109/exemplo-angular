import { Component, inject, signal } from '@angular/core';
import { ServiceForm } from './service-form';
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

  protected updateFormulario(event: SubmitEvent) {
    event.preventDefault();

    const put = this.usuarioModel();

    console.log(put, 'Alterado');

    this.serviceFormulario.updatePutDoService(put).subscribe({
      next: () => {
        this.usuarioModel.set({
          id: null,
          userId: null,
          title: '',
          body: ''
        });

        this.usuarioForm().reset();
      },

      error: () => {
        console.log('Algo deu errado')
      }

    })


  }


}
