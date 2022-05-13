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
  rows = [0, 1, 2];
  ratesObj: any = {};

  hotels = [
    {
      nome: 'Hote 1',
      rooms: [
        {
          Descricao: 'Quarto 1',
          rates: [
            { roomIndex: 1, disponibilidade: 3, refeicao: 'Café da Manhã 1', preco: 100 },
            { roomIndex: 1, disponibilidade: 4, refeicao: 'Café da Manhã 1', preco: 200 },
            { roomIndex: 1, disponibilidade: 5, refeicao: 'Café da Manhã 1', preco: 300 },
            { roomIndex: 2, disponibilidade: 3, refeicao: 'Café da Manhã 1', preco: 400 },
            { roomIndex: 2, disponibilidade: 4, refeicao: 'Café da Manhã 1', preco: 500 },
            { roomIndex: 2, disponibilidade: 5, refeicao: 'Café da Manhã 1', preco: 600 },
            { roomIndex: 3, disponibilidade: 3, refeicao: 'Café da Manhã 1', preco: 700 },
            { roomIndex: 3, disponibilidade: 4, refeicao: 'Café da Manhã 1', preco: 800 },
            { roomIndex: 3, disponibilidade: 5, refeicao: 'Café da Manhã 1', preco: 900 }
          ]
        },
        {
          Descricao: 'Quarto 2',
          rates: [
            { roomIndex: 1, disponibilidade: 3, refeicao: 'Café da Manhã 2', preco: 100 },
            { roomIndex: 1, disponibilidade: 4, refeicao: 'Café da Manhã 2', preco: 200 },
            { roomIndex: 1, disponibilidade: 5, refeicao: 'Café da Manhã 2', preco: 300 },
            { roomIndex: 2, disponibilidade: 3, refeicao: 'Café da Manhã 2', preco: 400 },
            { roomIndex: 2, disponibilidade: 4, refeicao: 'Café da Manhã 2', preco: 500 },
            { roomIndex: 2, disponibilidade: 5, refeicao: 'Café da Manhã 2', preco: 600 },
            { roomIndex: 3, disponibilidade: 3, refeicao: 'Café da Manhã 2', preco: 700 },
            { roomIndex: 3, disponibilidade: 4, refeicao: 'Café da Manhã 2', preco: 800 },
            { roomIndex: 3, disponibilidade: 5, refeicao: 'Café da Manhã 2', preco: 900 }
          ]
        },
        {
          Descricao: 'Quarto 3',
          rates: [
            { roomIndex: 1, disponibilidade: 3, refeicao: 'Café da Manhã 3', preco: 100 },
            { roomIndex: 1, disponibilidade: 4, refeicao: 'Café da Manhã 3', preco: 200 },
            { roomIndex: 1, disponibilidade: 5, refeicao: 'Café da Manhã 3', preco: 300 },
            { roomIndex: 2, disponibilidade: 3, refeicao: 'Café da Manhã 3', preco: 400 },
            { roomIndex: 2, disponibilidade: 4, refeicao: 'Café da Manhã 3', preco: 500 },
            { roomIndex: 2, disponibilidade: 5, refeicao: 'Café da Manhã 3', preco: 600 },
            { roomIndex: 3, disponibilidade: 3, refeicao: 'Café da Manhã 3', preco: 700 },
            { roomIndex: 3, disponibilidade: 4, refeicao: 'Café da Manhã 3', preco: 800 },
            { roomIndex: 3, disponibilidade: 5, refeicao: 'Café da Manhã 3', preco: 900 }
          ]
        }
      ]
    }
  ]

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursosService: CursosService
  ) { }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.curso = this.cursosService.getCursoId(this.id);
      if (this.curso == null) {
        this.router.navigate(['/curso-nao-encontrado']);
      }
    });

    for(let i = 0; i < this.rows.length; i++) {
      this.ratesObj[i+1] = this.hotels[0].rooms.map(room => {
        console.log('QUARTOS',i+1,room);
        return room.rates.filter(rate => rate.roomIndex === i+1);
      })[0];
      console.log(this.ratesObj);
    }
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
