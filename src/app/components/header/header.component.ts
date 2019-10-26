import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.styl'],
    encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
