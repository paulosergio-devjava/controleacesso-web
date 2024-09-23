import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private router: Router) {}

  navigateToUsuarios() {
    this.router.navigate(['/cadastro-usuarios']);
  }

  navigateToPerfis() {
    this.router.navigate(['/cadastro-perfis']);
  }

  navigateToAtribuicaoPerfis() {
    this.router.navigate(['/atribuicao-perfis']);
  }
}
