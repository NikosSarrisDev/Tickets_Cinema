import {Component, Input, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {PlaceOfMoviesService} from "./place-of-movies.service";
import {SearchBarComponent} from "../search-bar/search-bar.component";


@Component({
  selector: 'app-place-of-movies',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    SearchBarComponent
  ],
  templateUrl: './place-of-movies.component.html',
  styleUrl: './place-of-movies.component.css'
})
export class PlaceOfMoviesComponent implements OnInit{

  movies: any[] = [];

  showInBox = false;

  constructor(private placeofMoviesService: PlaceOfMoviesService) {}

  ngOnInit() {
    this.readAllMovies();
  }

  readAllMovies(){
    this.placeofMoviesService.getAllMovies().subscribe((data) => {
      this.movies = data;
    }, (error) =>{ console.error("Error feching movies", error) })
  }


  //Επειδή τα δύο Components που θέλω να επικοινωνούν έχουν σχέση γονέα-παιδιού θα περάσω
  //τα δεδομένα από το παιδί στον γονέα παιδί
  searchText: string = "";

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
    // console.log(searchValue);
  }

}
