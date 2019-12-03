import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Breadcrumbs } from 'src/app/interfaces/breadcrumbs';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.styl'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent implements OnInit {
    @Input() breadcrumbs: Breadcrumbs[];

    constructor() { }

    ngOnInit() {
    }
}
