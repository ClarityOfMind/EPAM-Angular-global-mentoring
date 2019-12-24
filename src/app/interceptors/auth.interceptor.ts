import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {State} from '@ngrx/store';
import {AppState} from '../store/app.reducers';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(
        private state: State<AppState>,
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.state.getValue().auth.token;
        if (token) {
            request = request.clone ({
                    setHeaders: {Authorization: token},
                }
            );
        }
        return next.handle(request);
    }
}
