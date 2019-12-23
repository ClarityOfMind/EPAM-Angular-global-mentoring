import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization-service/authorization.service';
import { Router } from '@angular/router';
import {User} from '../../interfaces/user';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.styl'],
    encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
    public userName: Observable<string>;

    constructor(
        public authService: AuthorizationService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.userName = this.authService.getUserInfo()
            .pipe(
                map(user => user ? user.name.first + ' ' + user.name.last : '')
            );
    }

    public logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
