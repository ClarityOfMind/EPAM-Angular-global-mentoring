import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization-service/authorization.service';
import { Router } from '@angular/router';
import {Authorization} from '../../../interfaces/authorization';

@Component({
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.styl'],
    encapsulation: ViewEncapsulation.None,
})
export class LoginPageComponent implements OnInit {
    public user: Authorization;

    constructor(
        private authService: AuthorizationService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.user = {
            login: '',
            password: '',
        };
    }

    public login(): void {
        this.authService.login({login: this.user.password, password: this.user.password});
        this.resetFields();
        this.router.navigate(['/']);
    }

    private resetFields(): void {
        for (const field in this.user) {
            this.user[field] = null;
        }
    }

}
