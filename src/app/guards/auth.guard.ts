import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {State} from '@ngrx/store';
import {AppState} from '../store/app.reducers';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private state: State<AppState>,
        private router: Router,
    ) {}
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
    | Observable<boolean
    | UrlTree>
    | Promise<boolean
    | UrlTree>
    | boolean
    | UrlTree {
        if (this.state.getValue().auth.token) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}
