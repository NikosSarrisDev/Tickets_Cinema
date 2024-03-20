import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, from, throwError} from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PlaceOfMoviesService {

  private apiUrl = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) {}

  getAllMovies(): Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error("Error fetching movies", error);
        return throwError(error);
      })
    );
  }

}
