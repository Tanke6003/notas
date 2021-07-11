import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router ,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let auth = route.data.auth;
      if(auth){
        if(localStorage.getItem('token')){
          return true;
        } else {
          this.router.navigate(['sign-in']);
          return false;
        }
      } else {
        if(localStorage.getItem('token')){
          this.router.navigate(['menu/inicio']);
          return false;
        }else{
          return true;
        }
      }
  }
  
}
