import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth';
  private tokenKey = 'auth_token';

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {
    const credentials = { username, password };

    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        if (response.token) {
            this.saveToken(response.token);
        }
      }),
      catchError(this.handleError<any>('login'))
    );
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

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}