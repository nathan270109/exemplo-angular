import { Component } from '@angular/core';
import { RequestGet } from "./request-get/request-get";
import { CadastroUsers } from "./cadastro-users/cadastro-users";

@Component({
  selector: 'app-exercicios-http',
  imports: [RequestGet, CadastroUsers],
  templateUrl: './exercicios-http.html',
  styleUrl: './exercicios-http.css',
})
export class ExerciciosHttp {}
