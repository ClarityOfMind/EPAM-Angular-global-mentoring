import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization-service/authorization.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.styl'],
    encapsulation: ViewEncapsulation.None,
})
export class LoginPageComponent implements OnInit {
    public userLogin: string;

    constructor(
        private authService: AuthorizationService,
        private router: Router,
    ) { }

    ngOnInit() {
    }

    public login() {
        this.authService.login({login: this.userLogin});
        this.userLogin = null;
        this.router.navigate(['/']);
    }

}
