import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization-service/authorization.service';
import { Router } from '@angular/router';
import {User} from '../../interfaces/user';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.styl'],
    encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
    public userName: string;

    constructor(
        public authService: AuthorizationService,
        private router: Router,
    ) { }

    ngOnInit() {
        if (this.authService.isAuthenticated) {
            this.authService.getUserInfo()
                .subscribe((user: User) => this.userName = user.name.first);
        }
    }

    public logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
