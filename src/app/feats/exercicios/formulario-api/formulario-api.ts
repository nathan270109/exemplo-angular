import { Component, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { FormularioApiService } from './formulario-api-service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-formulario-api',
  imports: [FormField],
  templateUrl: './formulario-api.html',
  styleUrl: './formulario-api.css',
})
export class FormularioApi {

  protected readonly servicoFormulario = inject(FormularioApiService)

  protected usuarioModel = signal<Usuario> ({
    userId: null,
    title: '',
    body: ''
  })

  protected alunoForm = form(this.usuarioModel);

  protected cadastrarUsuario(event: SubmitEvent) {
    event.preventDefault();

  }
}
