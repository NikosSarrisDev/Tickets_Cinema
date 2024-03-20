import { Component } from '@angular/core';
import {PolyglotService} from "../polyglot.service";
import { LocalNotifications } from "@capacitor/local-notifications";
import { Dialog } from "@capacitor/dialog";

@Component({
  selector: 'app-switch-language',
  standalone: true,
  imports: [],
  templateUrl: './switch-language.component.html',
  styleUrl: './switch-language.component.css',
})
export class SwitchLanguageComponent {

  greeting: string = "";

  constructor(private polyglotService: PolyglotService) {
    this.greeting = this.polyglotService.translate('hello')
  }

  switchLanguage(locale: string){
    this.polyglotService.setLocale(locale);
    this.greeting = this.polyglotService.translate("hello")
    LocalNotifications.schedule({
      notifications: [{
        title: "Language Switched",
        body: "The User changed the Language of the app",
        id: 2,
      }]
    })

    Dialog.alert({
      title: "Switch Language",
      message: this.greeting,
    })

  }

}
