import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {SwitchLanguageComponent} from "./switch-language/switch-language.component";
import { PushNotifications } from "@capacitor/push-notifications";
import { Dialog } from "@capacitor/dialog";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, LoginComponent, RouterLink, SwitchLanguageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'front-end';

  ngOnInit() {
    PushNotifications.addListener("pushNotificationReceived", () => {
        this.showConfirm()
    })
  }

  async showConfirm(){
    await Dialog.alert({
      title: 'Push Notification Received from Firebase',
      message: 'Notification'
      }
    )
  }


}

