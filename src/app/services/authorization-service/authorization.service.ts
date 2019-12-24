import { Injectable } from '@angular/core';
import { Authorization } from '../../interfaces/authorization';
import {HttpClient} from '@angular/common/http';
import {User} from '../../interfaces/user';
import {map, switchMap} from 'rxjs/operators';
import {State, Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducers';
import {ClearAuth, SetAuthToken, SetAuthUser} from '../../store/auth.actions';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthorizationService {
    constructor(
        private http: HttpClient,
        private store: Store<AppState>,
        private state: State<AppState>,
    ) { }

    public login(auth: Authorization): Observable<User> {
        return this.http
            .post<any>('http://localhost:3004/auth/login', auth)
            .pipe(
                switchMap(data => {
                    this.store.dispatch(new SetAuthToken(data.token));
                    return this.getUserInfo();
                })
            );
    }

    public logout() {
        this.store.dispatch(new ClearAuth());
    }

    public getUserInfo(): Observable<User> {
        return this.http
            .post<User>('http://localhost:3004/auth/userinfo', {token: this.state.getValue().auth.token})
            .pipe(
                map(user => {
                    this.store.dispatch(new SetAuthUser(user));
                    return user;
                })
            );
    }
}
