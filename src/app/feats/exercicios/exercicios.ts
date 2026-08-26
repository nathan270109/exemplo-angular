import { Component } from '@angular/core';
import { Contador } from "./contador/contador";
import { Autenticacao } from "./autenticacao/autenticacao";
import { ImagemDinamica } from "./imagem-dinamica/imagem-dinamica";
import { ExemploSignal } from "./exemplo-signal/exemplo-signal";
import { CadastroAlunos } from "./cadastro-alunos/cadastro-alunos";
import { FormularioApi } from './formulario-api/formulario-api';
import { FormularioPut } from "./formulario-put/formulario-put";
import { FormularioDelete } from "./formulario-delete/formulario-delete";

@Component({
  selector: 'app-exercicios',
  imports: [Contador, Autenticacao, ImagemDinamica, ExemploSignal, CadastroAlunos, FormularioApi, FormularioPut, FormularioDelete],
  templateUrl: './exercicios.html',
  styleUrl: './exercicios.css',
})
export class Exercicios {}
