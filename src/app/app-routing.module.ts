import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './guards/auth.guard';
import { CadastroUsuariosComponent } from './cadastro-usuarios/cadastro-usuarios.component';
import { CadastroPerfisComponent } from './cadastro-perfis/cadastro-perfis.component';
import { AtribuicaoPerfisComponent } from './atribuicao-perfis/atribuicao-perfis.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [

  { path: 'menu', component: MenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' } },
  { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard], data: { role: 'USER' } },
  { path: 'cadastro-usuarios', component: CadastroUsuariosComponent },
  { path: 'cadastro-perfis', component: CadastroPerfisComponent },
  { path: 'atribuicao-perfis', component: AtribuicaoPerfisComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
