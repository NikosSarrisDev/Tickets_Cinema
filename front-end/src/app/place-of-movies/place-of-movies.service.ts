import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, from} from "rxjs";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class PlaceOfMoviesService {

  private apiUrl = 'http://localhost:3000/movies';

  constructor() {}

  getAllMovies(): Observable<any[]>{
    return from(
      fetch(this.apiUrl).then((responce) => {
        if(!responce.ok) {
          throw new Error(`HTTp error! Status : ${responce.status}`);
        }
        return responce.json();
      })
        .catch(error => {
          console.error("Error fetching movies", error);
          throw error;
        })
    )
  }

}
