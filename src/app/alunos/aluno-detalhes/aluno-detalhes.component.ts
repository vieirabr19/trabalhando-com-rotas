import { Aluno } from './../aluno';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhes',
  templateUrl: './aluno-detalhes.component.html',
  styleUrls: ['./aluno-detalhes.component.scss']
})
export class AlunoDetalhesComponent implements OnInit, OnDestroy {
  aluno!: Aluno;
  inscricao!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) { }

  ngOnInit(): void {
    // this.inscricao = this.route.params.subscribe(params => {
    //   this.id = params['id'];
    //   this.aluno = this.alunosService.getAlunosId(this.id);
    // });

    console.log('ngOnInit - AlunoDetalhesComponent');
    
    this.inscricao = this.route.data.subscribe(data => {
      console.log('Recebendo o objeto aluno resolver');
      this.aluno = data.aluno;
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

}
