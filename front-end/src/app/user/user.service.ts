import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://b746-2a02-587-2f17-1d2c-81c0-1739-3b4c-a79c.ngrok-free.app/auth'
  constructor(private http: HttpClient) { }

  isAuthenticated: boolean = true;

  register(user: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  signIn(username: string, password: string): Observable<any>{
    return this.http.post(`${this.apiUrl}/login`, { username,password })
  }

}
