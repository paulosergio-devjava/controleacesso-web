import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.css']
})
export class CadastroUsuariosComponent implements OnInit {
  public user: { 'nome': string, 'senha': string, 'perfil': null } = {nome:'', senha:'', perfil:null};
  usuarios: any[] = [];
  perfis: any[] = [];
  isEdit = false;
  editIndex = -1;

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.listarUsuarios();
    this.listarPerfis();
  }

  listarUsuarios(): void {
    this.usuarioService.listarUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }

  listarPerfis(): void {
    this.usuarioService.listarPerfis().subscribe((data) => {
      this.perfis = data;
    });
  }

  onSubmit(): void {
    if (this.isEdit) {
      this.usuarioService.atualizarUsuario(this.editIndex, this.user).subscribe(() => {
        this.listarUsuarios();
        this.resetForm();
      });
    } else {
      this.usuarioService.criarUsuario(this.user).subscribe(() => {
        this.listarUsuarios();
        this.resetForm();
      });
    }
  }

  editarUsuario(id: number, usuario: any): void {
    this.user = { nome: usuario.nome, senha: usuario.senha, perfil: usuario.perfil };
    this.isEdit = true;
    this.editIndex = id;
  }

  excluirUsuario(id: number): void {
    this.usuarioService.deletarUsuario(id).subscribe(() => {
      this.listarUsuarios();
    });
  }

  resetForm(): void {
    this.user = { nome: '', senha: '', perfil: null };
    this.isEdit = false;
    this.editIndex = -1;
  }
}
