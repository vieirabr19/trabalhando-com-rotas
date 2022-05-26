import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IFormCanDeactivate } from 'src/app/guards/alunos-deactivate.guard';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit, OnDestroy, IFormCanDeactivate {
  aluno: any = {};
  inscricao!: Subscription;
  private formMuou = false;

  constructor(
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(params => {
      let id = params['id'];
      this.aluno = this.alunosService.getAlunosId(id);

      if(this.aluno === null){
        this.aluno = {};
      }
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

  onInput(){
    this.formMuou = true;
  }

  podeMudarRota(){
    let msg: boolean = true;
    if(this.formMuou){
      msg = confirm('As alterações no formulário não foram salvas e serão descartadas, deseja prosseguir?');
    }
    return msg;
  }

  podeDesativarRota() {
    return this.podeMudarRota();
  }

}
