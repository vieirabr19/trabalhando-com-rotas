import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit, OnDestroy {
  aluno: any = {};
  inscricao!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(params => {
      let id = params['id'];
      this.aluno = this.alunosService.getAlunosId(id);
      console.log(this.aluno);

      if(this.aluno === null){
        this.aluno = {};
      }
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
