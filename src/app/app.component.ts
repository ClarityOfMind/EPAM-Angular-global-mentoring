import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {LoadingService} from './services/loading.service';
import {AppState} from './store/app.reducers';
import {State} from '@ngrx/store';
import {AuthorizationService} from './services/authorization-service/authorization.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {
    public loading = false;

    private sub: Subscription;

    constructor(
        public loadingService: LoadingService,
        private state: State<AppState>,
        private authService: AuthorizationService,
        private cdRef: ChangeDetectorRef
    ) {}

    ngOnInit(): void {
        this.sub = this.loadingService
            .loading$
            .subscribe(loading => {
                this.loading = loading;

                // Без этого будет ошибка "Expression has changed after it was checked...."
                this.cdRef.detectChanges();
            });

        if (this.state.getValue().auth.token) {
            this.authService
                .getUserInfo()
                .subscribe();
        }
    }

    ngOnDestroy(): void {
        if (this.sub) {
            this.sub.unsubscribe();
            this.sub = null;
        }
    }
}
