import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url:string ="http://localhost:3000/";
  public logueado:boolean;
  public user:User;

  constructor(private http:HttpClient) {
    this.logueado = false;
    this.user = null;
  }
  register(user:User){
    console.log("paso por aquí")
    return this.http.post<User>(this.url + "register", user);
  }
  login(user:User){
    return this.http.post<User>(this.url + "login", user);
  }
}
