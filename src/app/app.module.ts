import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CadastroUsuariosComponent } from './cadastro-usuarios/cadastro-usuarios.component';
import { CadastroPerfisComponent } from './cadastro-perfis/cadastro-perfis.component';
import { AtribuirPerfisComponent } from './atribuir-perfis/atribuir-perfis.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuariosComponent,
    CadastroPerfisComponent,
    AtribuirPerfisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'cadastro-usuarios', component: CadastroUsuariosComponent },
      { path: 'cadastro-perfis', component: CadastroPerfisComponent },
      { path: 'atribuicao-perfis', component: AtribuirPerfisComponent },
      { path: '', redirectTo: '/cadastro-usuarios', pathMatch: 'full' },
      { path: '**', redirectTo: '/cadastro-usuarios' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
