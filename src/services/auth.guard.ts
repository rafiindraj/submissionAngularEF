import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
} from "@angular/router";
  
@Injectable()
export class AuthGuard implements CanActivate {
  isAuthenticated = false
    constructor(
        private router: Router) { 
          if( localStorage.getItem("Login")!=null ){
            this.isAuthenticated = true
          }
          else {
            this.isAuthenticated = false
          }
        }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> {
        if (!this.isAuthenticated) {
            this.router.navigate(['/auth']);
        }
        return this.isAuthenticated;
    }
}