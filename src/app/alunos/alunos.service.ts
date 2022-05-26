import { Injectable } from '@angular/core';
import { Aluno } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: Aluno[] = [
    {id: 1, nome: 'Aluno 01', email: 'aluno01@emauil.com'},
    {id: 2, nome: 'Aluno 02', email: 'aluno02@emauil.com'},
    {id: 3, nome: 'Aluno 03', email: 'aluno03@emauil.com'}
  ];

  constructor() { }

  getAlunos(){
    return this.alunos;
  }

  getAlunosId(id: number){
    const alunos = this.getAlunos();
    for(let i = 0; i < alunos.length; i++){
      const aluno = alunos[i];
      if(aluno.id == id) return aluno;
    }
    return null;
  }
}
