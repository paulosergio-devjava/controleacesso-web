import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:8080/api/usuarios';  // URL da API Spring Boot

  constructor(private http: HttpClient) {}

  listarUsuarios(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  listarPerfis(): Observable<any> {
    return this.http.get(`${this.apiUrl}/perfis`);
  }

  criarUsuario(usuario: any): Observable<any> {
    return this.http.post(this.apiUrl, usuario);
  }

  deletarUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  atualizarUsuario(id: number, usuario: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, usuario);
  }
}
