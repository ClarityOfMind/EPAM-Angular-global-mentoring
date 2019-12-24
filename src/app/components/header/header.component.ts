import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization-service/authorization.service';
import { Router } from '@angular/router';
import {User} from '../../interfaces/user';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducers';
import {selectAuthToken, selectAuthUser} from '../../store/auth.selectors';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.styl'],
    encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
    public userName$: Observable<string>;
    public isAuthenticated$: Observable<boolean>;

    constructor(
        public authService: AuthorizationService,
        private router: Router,
        private store: Store<AppState>,
    ) { }

    ngOnInit() {
        this.userName$ = this.store
            .select(selectAuthUser)
            .pipe(map(user => user ? user.name.first + ' ' + user.name.last : ''));
        this.isAuthenticated$ = this.store
            .select(selectAuthToken)
            .pipe(map(token => !!token));
    }

    public logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
