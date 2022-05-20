import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursoNaoEncotradoComponent } from './curso-nao-encotrado/curso-nao-encotrado.component';
import { CursosDetalhesComponent } from './cursos-detalhes/cursos-detalhes.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';


@NgModule({
  declarations: [
    CursosComponent,
    CursosDetalhesComponent,
    CursoNaoEncotradoComponent
  ],
  imports: [ 
    CommonModule,
    CursosRoutingModule
  ],
  exports: [
    CursosComponent
  ],
  providers: [],
})
export class CursosModule {}