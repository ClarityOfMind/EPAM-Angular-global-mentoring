import { Injectable } from '@angular/core';
import { Authorization } from '../../interfaces/authorization';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {User} from '../../interfaces/user';

@Injectable({
    providedIn: 'root'
})
export class AuthorizationService {
    public token: string;

    constructor(
        private http: HttpClient,
    ) {
        this.token = localStorage.getItem('token');
    }

    public login(auth: Authorization): void {
        this.http.post('http://localhost:3004/auth/login', auth)
            .subscribe((data: any) => {
                this.token = data.token;
                localStorage.setItem('token', this.token);
            });
    }

    public logout(): void {
        this.token  = null;
        localStorage.removeItem('token');
    }

    public getUserInfo(): Observable<User> {
        if (!this.token) {
            return of(null);
        }
        return this.http
            .post<User>('http://localhost:3004/auth/userinfo', {token: this.token});
    }

    public get isAuthenticated(): boolean {
        return !!this.token;
    }
}
