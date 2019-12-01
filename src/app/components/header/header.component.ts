import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization-service/authorization.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.styl'],
    encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {

    constructor(
        public authService: AuthorizationService,
        private router: Router,
    ) { }

    ngOnInit() {
    }

    public logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
