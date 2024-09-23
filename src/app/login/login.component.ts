import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../guards/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const isLoggedIn = this.authService.login(this.username, this.password);
    if (isLoggedIn) {
      this.router.navigate(['/menu']);
    } else {
      this.errorMessage = 'Nome de usuário ou senha incorretos';
    }
  }
}
