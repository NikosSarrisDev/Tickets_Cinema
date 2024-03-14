import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedLoginUserIconServiceService {

  constructor() { }

  private sharedDataSubject = new BehaviorSubject<string>("Initial Value");
  sharedData = this.sharedDataSubject.asObservable();

  updateSharedData(newData: string): void {
    this.sharedDataSubject.next(newData);
  }
}
