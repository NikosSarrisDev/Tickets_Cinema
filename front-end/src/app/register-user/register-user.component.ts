import { Component } from '@angular/core';
import {UserService} from "../user/user.service";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {

  errorMessage: string = "";
  errorExist: boolean = false;

  user = {
    username : "",
    password : "",
    phone : "",
    name : "",
    surname: "",
    email : "",
    photo: "",
  }

  constructor(private readonly userService: UserService, private readonly router: Router) {
  }

  registerUser(){

    // console.log(this.user.username)
    if(this.user.username.trim() !== "" && this.user.password.trim() !== "" && this.user.phone.trim() !== "" && this.user.name.trim() !== "" && this.user.surname.trim() !== "" && this.user.email.trim() !== "" && this.user.photo.trim() !== "") {
      this.userService.register(this.user).subscribe((res) => {
          this.router.navigate(['/login'])
        },
        (error) => {
          console.error("Something went wrong")
        })

    }else{
      console.error("All fields are mandatory");
      this.errorMessage = "All fields are required";
      this.errorExist = true;
    }
  }

}
