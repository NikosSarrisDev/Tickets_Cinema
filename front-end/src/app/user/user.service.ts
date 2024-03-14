import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/auth'
  constructor(private http: HttpClient) { }

  isAuthenticated: boolean = true;

  register(user: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  signIn(username: string, password: string): Observable<any>{
    return this.http.post(`${this.apiUrl}/login`, { username,password })
  }

}
