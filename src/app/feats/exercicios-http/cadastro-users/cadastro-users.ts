import { Component, inject, signal } from '@angular/core';
import { UserService } from '../user-service';
import { form, FormField } from '@angular/forms/signals';
import { Users } from './users';

@Component({
  selector: 'app-cadastro-users',
  imports: [FormField],
  templateUrl: './cadastro-users.html',
  styleUrl: './cadastro-users.css',
})
export class CadastroUsers {

  protected readonly servicoFormulario = inject(UserService);

  protected usuarioModel = signal<Users>({
    id: null,
    name: '',
    username: '', 
    email: '',
    phone: null
  });

  protected usuarioForm = form(this.usuarioModel);

  //////////////////

  protected cadastrarUsuario(event: SubmitEvent) {
    event.preventDefault();

    const post = this.usuarioModel();

    

    this.servicoFormulario.cadastrarPostDoService(post).subscribe({
      next: (users) => {

        console.log("cadastrado" + users);

        this.usuarioModel.set({
          id: null,
          name: '',
          username: '', 
          email: '',
          phone: null
        });

        this.usuarioForm().reset();
      },

      error: () => {
        console.log('Algo deu errado')
      }

    })


  }

}
