import { Component, inject, signal } from '@angular/core';
import { InterfaceDelete } from './interface-delete';
import { form, FormField } from '@angular/forms/signals';
import { ServiceDelete } from '../services/delete/service-delete';

@Component({
  selector: 'app-formulario-delete',
  imports: [FormField],
  templateUrl: './formulario-delete.html',
  styleUrl: './formulario-delete.css',
})
export class FormularioDelete {

  protected readonly serviceDeletePost = inject(ServiceDelete);
  
  protected interfaceModel = signal<InterfaceDelete>({
    id: null
  });

  protected interfaceForm = form(this.interfaceModel);

  ////////////////////

  protected usuarioDelete(event: SubmitEvent){
    event.preventDefault();

    this.serviceDeletePost.deletarPostService(this.interfaceModel()).subscribe({
      next: () => {
        alert('Post Deletado');

        this.interfaceModel.set({
          id: null
        })
        this.interfaceForm().reset()
      },
      error: () => {
        alert('Algo deu errado')
      }
    })





  }



}
