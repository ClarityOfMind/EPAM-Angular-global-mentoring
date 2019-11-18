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
        localStorage.setItem('userName', JSON.stringify(auth));
    }

    public logout(): void {
        this.currentUser = null;
    }

    public getUserInfo(): void {
        return this.currentUser = null;
    }

    public get isAuthenticated(): boolean {
        return !!this.currentUser;
    }
}
