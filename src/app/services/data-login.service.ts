import { Injectable } from '@angular/core';
import { HttpClient, HttpParameterCodec } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Usuario } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class DataLoginService {

  private URL = 'http://localhost:4000/api'

  nombreUsuario: string = 'Sin Nombre.....!!!'

  constructor(private http: HttpClient) { }

  createUser(user: any): Observable<any> {
    return this.http.post(this.URL + '/create-user', user);
  }

  getUser(user: any): Observable<any> {
    return this.http.post(this.URL + '/login', user)
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
