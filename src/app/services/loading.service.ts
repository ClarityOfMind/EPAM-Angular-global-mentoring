import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    private loading$ = new Subject<boolean>();

    constructor() { }

    public init(): Observable<boolean> {
        return this.loading$.asObservable();
    }

    public showLoading(): void {
        this.loading$.next(true);
    }

    public hideLoading(): void {
        this.loading$.next(false);
    }
}
