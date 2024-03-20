import { Injectable } from '@angular/core';
import Polyglot from "node-polyglot";
import en from "../assets/i18n/en"
import fr from "../assets/i18n/fr"
@Injectable({
  providedIn: 'root'
})
export class PolyglotService {

  private polyglot: Polyglot;

  constructor() {
    this.polyglot = new Polyglot();
    this.polyglot.extend(en);
    this.polyglot.locale('en')
  }

  setLocale(locale: string){
    switch (locale) {
      case 'en':
        this.polyglot.extend(en);
        break;
      case 'fr':
        this.polyglot.extend(fr);
        break;
      default:
        console.warn(`Locale '${locale}' not supported.`);
    }
    this.polyglot.locale(locale);
  }

  translate(key: string, options?: Polyglot.InterpolationOptions) {
    return this.polyglot.t(key, options);
  }
}
