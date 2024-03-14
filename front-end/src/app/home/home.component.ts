import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {PlaceOfMoviesComponent} from "../place-of-movies/place-of-movies.component";
import {SearchBarComponent} from "../search-bar/search-bar.component";
import {UserIconComponent} from "../user-icon/user-icon.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, PlaceOfMoviesComponent, SearchBarComponent, UserIconComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
