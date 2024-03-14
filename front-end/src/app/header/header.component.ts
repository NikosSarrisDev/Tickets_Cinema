import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RouterLink} from "@angular/router";
import {UserIconComponent} from "../user-icon/user-icon.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    UserIconComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  name: string = "";

  @Output() eventEmitter = new EventEmitter<string>();

  EmitTheEventYoujustmade() {
    this.eventEmitter.emit(this.name);
  }

}
