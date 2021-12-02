import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './app/_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthService,
    private router: Router) { }


    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authService.isloggedIn() !== true) {
        window.alert('Access not allowed!');
        this.router.navigate(['']);
      }
      else if (this.authService.isloggesdIn2()!==true){
        window.alert('Access not allowed!');
        this.router.navigate(['']);
      }
      return true;
    }

}
