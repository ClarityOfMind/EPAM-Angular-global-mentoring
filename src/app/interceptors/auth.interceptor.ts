import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthorizationService} from '../services/authorization-service/authorization.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const user = JSON.parse(localStorage.getItem('currentUser'))
        request = request.clone ({
                setHeaders: user ? user.token : '',
            }
        )
        return next.handle(request);
    }
}
