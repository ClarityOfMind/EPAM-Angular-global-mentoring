import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization-service/authorization.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.styl'],
    encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {

    constructor(
        private authService: AuthorizationService,
    ) { }

    ngOnInit() {
    }

    public logout() {
        console.log('logout');
        this.authService.logout();
    }
}
