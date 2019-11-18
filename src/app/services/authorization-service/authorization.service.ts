import { Injectable } from '@angular/core';
import { Authorization } from '../../interfaces/authorization';

@Injectable({
    providedIn: 'root'
})
export class AuthorizationService {
    private currentUser: Authorization | null;

    constructor() {
        this.currentUser = localStorage.getItem('userName') && JSON.parse(localStorage.getItem('userName'));
    }

    public login(auth: Authorization): void {
        this.currentUser = auth;
        localStorage.setItem('userName', JSON.stringify(auth));
    }

    public logout(): void {
        this.currentUser = null;
        localStorage.removeItem('userName');
    }

    public getUserInfo(): Authorization {
        return this.currentUser;
    }

    public get isAuthenticated(): boolean {
        return !!this.currentUser;
    }
}
