import { Component, inject, signal } from '@angular/core';
import { Aluno } from './aluno';
import { form, FormField, max, min, required } from '@angular/forms/signals';
import { CadastroAlunosService } from './cadastro-alunos-service';

@Component({
  selector: 'app-cadastro-alunos',
  imports: [FormField],
  templateUrl: './cadastro-alunos.html',
  styleUrl: './cadastro-alunos.css',
})
export class CadastroAlunos {


  protected readonly servicoCerto = inject(CadastroAlunosService);


  protected alunoModel = signal<Aluno>({
    nome: '',
    media: null
  });
   
  protected alunoForm = form(this.alunoModel, (s) => {
   
    required(s.nome, { message: 'O nome do aluno é obrigatório' });


    required(s.media, { message: 'A média é obrigatória' });
    min(s.media, 0, { message: 'Média não pode ser menor do que 0' });
    max(s.media, 10, { message: 'Média não pode ser maior do que 10' });
  });

  protected cadastrarAluno(event: SubmitEvent) {
    event.preventDefault();


    const aluno = this.alunoModel();

   
    this.servicoCerto.cadastrarAluno(aluno);


    this.alunoModel.set({
      nome: '',
      media: null
    });


    this.alunoForm().reset();
  }

}
