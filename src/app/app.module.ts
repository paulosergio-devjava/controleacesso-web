import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  // Importa RouterModule

import { AppComponent } from './app.component';
import { CadastroUsuariosComponent } from './cadastro-usuarios/cadastro-usuarios.component';
import { CadastroPerfisComponent } from './cadastro-perfis/cadastro-perfis.component';
import { AtribuicaoPerfisComponent } from './atribuicao-perfis/atribuicao-perfis.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuariosComponent,
    CadastroPerfisComponent,
    AtribuicaoPerfisComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)  // Importa RouterModule e configura as rotas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
