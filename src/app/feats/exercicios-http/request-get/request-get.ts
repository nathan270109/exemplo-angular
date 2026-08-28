import { Component, inject, signal } from '@angular/core';
import { ListUsers } from './list-users';
import { UserService } from '../user-service';
import { form } from '@angular/forms/signals';

@Component({
  selector: 'app-request-get',
  imports: [],
  templateUrl: './request-get.html',
  styleUrl: './request-get.css',
})
export class RequestGet {

  protected readonly requestService = inject(UserService);

  protected listUsersModel = signal<ListUsers>({
    id: null,
    name: '',
    username: '',
    email: '',
    phone: null 
  });

  protected listUsersForm = form(this.listUsersModel);

  ////////////////////////////////////////

  protected mostrarUsuarios(event: SubmitEvent) {
    event.preventDefault();





  }





}
