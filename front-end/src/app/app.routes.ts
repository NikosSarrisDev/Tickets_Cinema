import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";
import { authGuard } from "./auth.guard";
import {HomeComponent} from "./home/home.component";
import {RegisterUserComponent} from "./register-user/register-user.component";

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: HomeComponent, canActivate: [authGuard] },
  { path: 'register', component: RegisterUserComponent },
];
