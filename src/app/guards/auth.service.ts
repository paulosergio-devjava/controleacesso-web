import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenKey = 'auth_token';
  private userKey = 'auth_user';

  
  login(username: string, password: string): boolean {
    if (username === 'Admin' && password === '123') {
      const token = 'fake-jwt-token';
      const user = { username: 'Admin', role: 'ADMIN' };

      this.saveToken(token);
      this.saveUser(user);

      return true;
    }

    return false;
  }

  private saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }

  saveUser(user: any): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }

  getUser(): any {
    const userJson = localStorage.getItem(this.userKey);
    return userJson ? JSON.parse(userJson) : null;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
  }
}
