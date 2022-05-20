import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursoNaoEncotradoComponent } from './curso-nao-encotrado/curso-nao-encotrado.component';
import { CursosDetalhesComponent } from './cursos-detalhes/cursos-detalhes.component';
import { CursosComponent } from './cursos.component';

const cursoRoutes: Routes = [
  {path: '', component: CursosComponent},
  {path: 'nao-encontrado', component: CursoNaoEncotradoComponent},
  {path: ':id', component: CursosDetalhesComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(cursoRoutes)
  ],
  exports: [RouterModule],
})
export class CursosRoutingModule {}