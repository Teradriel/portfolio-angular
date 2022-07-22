import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GuardGuard implements CanActivate {
  /* public guardLogged = false; */
  constructor(
    private autenticacionService: AutenticacionService,
    private rutas: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.autenticacionService.Logged.pipe(
      take(1),
      map((Logged: boolean) => {
        if (!Logged) {
          this.rutas.navigate(['/login']);
          return false;
        } else {
          return true;
        }
      })
    );
  }
}
