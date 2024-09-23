import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { CadastroUsuariosComponent } from './cadastro-usuarios/cadastro-usuarios.component';
import { CadastroPerfisComponent } from './cadastro-perfis/cadastro-perfis.component';
import { AtribuirPerfisComponent } from './atribuir-perfis/atribuir-perfis.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent, canActivate: [AuthGuard] },
  {
    path: 'cadastro-usuarios', 
    component: CadastroUsuariosComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: 'cadastro-perfis', 
    component: CadastroPerfisComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: 'atribuicao-perfis', 
    component: AtribuirPerfisComponent, 
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
