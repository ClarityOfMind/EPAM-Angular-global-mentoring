import { Injectable } from '@angular/core';
import { Authorization } from '../../interfaces/authorization';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthorizationService {
    private currentUser: {name: string, token: string};

    constructor(
        private http: HttpClient,
    ) {
        this.currentUser = localStorage.getItem('currentUser') && JSON.parse(localStorage.getItem('currentUser'));
    }

    public login(auth: Authorization): void {
        this.http.post('http://localhost:3004/auth/login', auth)
            .subscribe({
                next: (fakeToken: {token: string}) => {
                    this.currentUser = {name: auth.login, token: fakeToken.token };
                    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
                },
                error: error => console.log(error),
            });
    }

    public logout(): void {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
    }

    public getUserInfo(): Observable<any> {
        return this.http.post('http://localhost:3004/auth/userinfo', {token: this.currentUser.token});
    }

    public get isAuthenticated(): boolean {
        return !!this.currentUser;
    }
}
