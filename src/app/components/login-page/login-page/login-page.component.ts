import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization-service/authorization.service';
import {Authorization} from '../../../interfaces/authorization';
import {Router} from '@angular/router';

@Component({
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.styl'],
    encapsulation: ViewEncapsulation.None,
})
export class LoginPageComponent implements OnInit {
    public user: Authorization = {
        login: '',
        password: '',
    };

    constructor(
        private authService: AuthorizationService,
        private router: Router,
    ) { }

    ngOnInit() {
    }

    public login(): void {
        this.authService
            .login({login: this.user.password, password: this.user.password})
            .subscribe(() => this.router.navigate(['/']));
    }
}
