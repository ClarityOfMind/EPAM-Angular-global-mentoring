import { Injectable } from '@angular/core';
import { Course } from 'src/app/interfaces/course';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoadingService} from '../loading.service';
import {finalize, map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducers';
import {getCourses} from '../../store/course-reducer/course.actions';

const URL = 'http://localhost:3004/courses';

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    constructor(
        private http: HttpClient,
        private loadingService: LoadingService,
        private store: Store<AppState>,
    ) { }

    public getList(count: number): void {
        this.loadingService.showLoading();
        this.http.get(`${URL}?start=0&count=${count}`)
            .pipe(
                map(courses => this.store.dispatch(getCourses({list: courses}))),
                finalize(() => this.loadingService.hideLoading()),
            )
            .subscribe();
    }

    public createCourse(course: Course): Observable<any> {
        this.loadingService.showLoading();
        return this.http.post(`${URL}`, course)
            .pipe(
                finalize(() => this.loadingService.hideLoading()),
            );
    }

    public getItemById(id: number): Observable<any> {
        this.loadingService.showLoading();
        return this.http.get(`${URL}?id=${id}`)
            .pipe(
                finalize(() => this.loadingService.hideLoading()),
            );
    }

    public updateItem(course: Course): Observable<any> {
        this.loadingService.showLoading();
        return this.http.patch(`${URL}/${course.id}`, course)
            .pipe(
                finalize(() => this.loadingService.hideLoading()),
            );
    }

    public removeItem(id: number): Observable<any> {
        this.loadingService.showLoading();
        return this.http.delete(`${URL}/${id}`)
            .pipe(
                finalize(() => this.loadingService.hideLoading()),
            );
    }

    public search(text: string): void {
        this.http.get(`${URL}?textFragment=${text}`)
            .pipe(
                map(courses => this.store.dispatch(getCourses({list: courses}))),
            )
            .subscribe();
    }
}
