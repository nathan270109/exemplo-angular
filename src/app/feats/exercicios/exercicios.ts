import { Component } from '@angular/core';
import { FormularioApi } from './formulario-api/formulario-api';
import { FormularioPut } from "./formulario-put/formulario-put";
import { FormularioDelete } from "./formulario-delete/formulario-delete";
import { MetodoGet } from "./metodo-get/metodo-get";

@Component({
  selector: 'app-exercicios',
  imports: [  FormularioApi, FormularioPut, FormularioDelete, MetodoGet],
  templateUrl: './exercicios.html',
  styleUrl: './exercicios.css',
})
export class Exercicios {}
