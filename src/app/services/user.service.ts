import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:4000/api/usuarios/';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get(this.url)
  }

  deleteUsuario(id: string): Observable<any> {
    return this.http.delete(this.url + id)
  }

  saveUsuario(usuario: Usuario): Observable<any> {
    return this.http.post(this.url, usuario)
  }

  verUsuario(id?: string): Observable<any> {
    return this.http.get(this.url + id)
  }

  actualizarUsuario(id: string, usuario: Usuario): Observable<any> {
    return this.http.put(this.url + id, usuario)
  }
}
