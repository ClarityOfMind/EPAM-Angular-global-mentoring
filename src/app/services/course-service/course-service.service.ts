import { Injectable } from '@angular/core';
import { Course } from 'src/app/interfaces/course';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoadingService} from '../loading.service';
import {tap} from 'rxjs/operators';

const URL = 'http://localhost:3004/courses';

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    constructor(
        private http: HttpClient,
        private loadingService: LoadingService,
    ) { }

    public getList(count: number): Observable<any> {
        this.loadingService.showLoading();
        return this.http.get(`${URL}?start=0&count=${count}`)
            .pipe(
                tap(() => this.loadingService.hideLoading(), () => this.loadingService.hideLoading()),
            );
    }

    public createCourse(course: Course): Observable<any> {
        this.loadingService.showLoading();
        return this.http.post(`${URL}`, course)
            .pipe(
                tap(() => this.loadingService.hideLoading(), () => this.loadingService.hideLoading()),
            );
    }

    public getItemById(id: number): Observable<any> {
        this.loadingService.showLoading();
        return this.http.get(`${URL}?id=${id}`)
            .pipe(
                tap(() => this.loadingService.hideLoading(), () => this.loadingService.hideLoading()),
            );
    }

    public updateItem(course: Course): Observable<any> {
        this.loadingService.showLoading();
        return this.http.patch(`${URL}/${course.id}`, course)
            .pipe(
                tap(() => this.loadingService.hideLoading(), () => this.loadingService.hideLoading()),
            );
    }

    public removeItem(id: number): Observable<any> {
        this.loadingService.showLoading();
        return this.http.delete(`${URL}/${id}`)
            .pipe(
                tap(() => this.loadingService.hideLoading(), () => this.loadingService.hideLoading()),
            );
    }

    public search(text: string): Observable<any> {
        return this.http.get(`${URL}?textFragment=${text}`);
    }
}
