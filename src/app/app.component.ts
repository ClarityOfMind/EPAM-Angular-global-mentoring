import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LoadingService} from './services/loading.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
    public loading$: boolean;

    constructor(
        private loadingService: LoadingService,
    ) {}

    ngOnInit(): void {

    }
}
