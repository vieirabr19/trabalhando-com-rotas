import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { ContatoComponent } from './contato/contato.component';
import { CursosDetalhesComponent } from './cursos-detalhes/cursos-detalhes.component';
import { CursoNaoEncotradoComponent } from './curso-nao-encotrado/curso-nao-encotrado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CursosComponent,
    ContatoComponent,
    CursosDetalhesComponent,
    CursoNaoEncotradoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
