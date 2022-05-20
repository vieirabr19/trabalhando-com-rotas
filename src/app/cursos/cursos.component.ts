import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  cursos!: any[];
  pagina!: number;

  constructor(
    private cursosService: CursosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
    this.route.queryParams.subscribe(params => {
      this.pagina = params['pagina'];
    })
  }

  proximaPagina(){
    // this.pagina++;
    this.router.navigate(['/cursos'], {
      queryParams: {pagina: ++this.pagina}
    });
  }

}
