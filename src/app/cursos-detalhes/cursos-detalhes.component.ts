import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-cursos-detalhes',
  templateUrl: './cursos-detalhes.component.html',
  styleUrls: ['./cursos-detalhes.component.scss']
})
export class CursosDetalhesComponent implements OnInit, OnDestroy {

  id!: number;
  inscricao!: Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursosService: CursosService
  ) {}
  
  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];

      this.curso = this.cursosService.getCursoId(this.id);

      if(this.curso == null) {
        this.router.navigate(['/curso-nao-encontrado']);
      }
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
