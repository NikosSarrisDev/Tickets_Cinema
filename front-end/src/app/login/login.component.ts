import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../user/user.service";
import {Observable, Subscription} from "rxjs";
import {FormsModule} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {SharedLoginUserIconServiceService} from "../shared-login-user-icon-service.service";
import { LocalNotifications } from "@capacitor/local-notifications";
import { PushNotifications } from "@capacitor/push-notifications";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy{

  //Κρατάω έναν array με subscriptions
  subscriptions = new Subscription();

  username: string = '';
  password: string = '';

  sharedDataForLoginIcon: string = "";

  iserrorLoginMessage: boolean = false;

  constructor(private readonly userService: UserService, private router: Router, private sharedDataService: SharedLoginUserIconServiceService) {
  }

  ngOnInit() {
    this.sharedDataService.sharedData.subscribe((value) => {
      this.sharedDataForLoginIcon = value;
    })
  }

  updateDataForTheUserIcon(message: string): void {
    this.sharedDataService.updateSharedData(message);
  }

  //Event όταν πατάω το κουμπί για login
  loginEvent(){

    this.userService.signIn(this.username, this.password).subscribe(
      (res) => {

        //Αποθηκεύω το access token μέσα στο localStorage
        const JwtToken = res.assess_token;
        localStorage.setItem("JSON WEB TOKEN", JwtToken);

        //Καλώ τη συνάρτηση updateDataForTheUserIcon με την οποία κάνω ένα publication στο
        //BehaiviourSubject που βρίσκεται στο shared Service και όλοι που έχουν κάνει εγγραφή έχουν πρόσβαση
        this.updateDataForTheUserIcon(this.username);

        LocalNotifications.schedule({
          notifications:[
            {
              title: `A new Login action`,
              body: `User ${this.username} has been logged in`,
              id: 1
            }
          ]
        })

        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error("Invalid Credential");
        this.iserrorLoginMessage = true;
        this.username = '';
        this.password = '';
      }
    )

  }

  ngOnDestroy() {
    // this.subscriptions.unsubscribe();
  }

}
