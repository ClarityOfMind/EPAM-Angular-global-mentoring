import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    public loading$ = new Subject<boolean>();
    private count = 0

    constructor() { }

    public showLoading(): void {
        this.count++;

        if (this.count === 1) {
            this.loading$.next(true);
        }
    }

    public hideLoading(): void {
        this.count--;

        if (this.count === 0) {
            this.loading$.next(false);
        }

        this.count = Math.max(this.count, 0);
    }
}
