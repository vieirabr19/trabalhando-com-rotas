import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatoComponent } from './contato/contato.component';
import { CursoNaoEncotradoComponent } from './curso-nao-encotrado/curso-nao-encotrado.component';
import { CursosDetalhesComponent } from './cursos-detalhes/cursos-detalhes.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'cursos', component: CursosComponent},
  {path: 'curso/:id', component: CursosDetalhesComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'curso-nao-encontrado', component: CursoNaoEncotradoComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
