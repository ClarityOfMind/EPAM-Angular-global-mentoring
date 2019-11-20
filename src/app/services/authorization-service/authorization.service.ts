import { Injectable } from '@angular/core';
import { Authorization } from '../../interfaces/authorization';

@Injectable({
    providedIn: 'root'
})
export class AuthorizationService {
    private currentUser: Authorization | null;

    constructor() {
        this.currentUser = localStorage.getItem('login') && JSON.parse(localStorage.getItem('login'));
    }

    public login(auth: Authorization): void {
        this.currentUser = auth;
        localStorage.setItem('login', JSON.stringify(auth));
    }

    public logout(): void {
        this.currentUser = null;
        localStorage.removeItem('login');
    }

    public getUserInfo(): Authorization {
        return this.currentUser;
    }

    public get isAuthenticated(): boolean {
        return !!this.currentUser;
    }
}
