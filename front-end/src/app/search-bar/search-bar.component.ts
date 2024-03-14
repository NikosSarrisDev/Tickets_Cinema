import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent implements OnInit{

  constructor() {
  }

  ngOnInit() {
  }

  //Σε αυτό το σημείο θα γίνει το search functionality γιτ τις ταινίες
  enteredSearchValue: string = "";

  //Φτιαχνω αυτό τον Event Emitter για να εποικοινωνήσω με το component το οποίο πρέπει να κάνω το search
  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();


  //Κάθε φορά που θα γίνεται raize αυτό το event θα γίνεται emit αυτό που υπάρχει στο search bar
  //θέλουμε να καλούμε αυτήν τη μέθοδο κάθε φορά που ξεκινάμε να πληκτρολογήσουμε στο search bar
  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue)
  }
}
