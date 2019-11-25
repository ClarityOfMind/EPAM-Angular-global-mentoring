import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-duration-field',
    templateUrl: './duration-field.component.html',
    styleUrls: ['./duration-field.component.styl'],
    encapsulation: ViewEncapsulation.None,
})
export class DurationFieldComponent implements OnInit {
    @Input() duration: string;

    constructor() { }

    ngOnInit() {
    }

}
