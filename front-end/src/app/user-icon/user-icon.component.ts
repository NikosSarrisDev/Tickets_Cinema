import {Component, OnInit} from '@angular/core';
import {SharedLoginUserIconServiceService} from "../shared-login-user-icon-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-icon',
  standalone: true,
  imports: [],
  templateUrl: './user-icon.component.html',
  styleUrl: './user-icon.component.css'
})
export class UserIconComponent implements OnInit{

  constructor(private sharedDataService: SharedLoginUserIconServiceService, private router: Router) {
  }

  sharedDataToReceive: string = '';

  ngOnInit() {
    //Ελένχω άμα ο χρήστης δεν έχει
    if(this.sharedDataToReceive === "Initial Value"){
      this.router.navigate(["/login"]);
    }

    this.sharedDataService.sharedData.subscribe((value) => {
      this.sharedDataToReceive = value;
    })
  }

  onLogout() {
    localStorage.removeItem("JSON WEB TOKEN")
    this.router.navigate(['/login']);
  }

}
