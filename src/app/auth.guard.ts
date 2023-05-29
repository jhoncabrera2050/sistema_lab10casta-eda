import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { DataLoginService } from './services/data-login.service'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

export class authGuard implements CanActivate {

  constructor(
    private authService: DataLoginService,
    private router: Router
  ){}

  canActivate(): boolean{
    if (this.authService.loggedIn()) {
      return true
    }

    this.router.navigate(['/']);
    return false
  }

}