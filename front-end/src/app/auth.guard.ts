
import { UserService } from "./user/user.service";
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class authGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      if (this.userService.isAuthenticated) {
        resolve(true);
      } else {
        // Redirect to the login page
        this.router.navigate(['/login']);
        resolve(false);
      }
    });
  }
}


