import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRole = route.data['role'];
    const user = this.authService.getUser();
  
    if (this.authService.isAuthenticated() && user && user.role === expectedRole) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
