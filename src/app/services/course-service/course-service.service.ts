import { Injectable } from '@angular/core';
import { Course } from 'src/app/interfaces/course';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoadingService} from '../loading.service';

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
        return this.http.get(`${URL}?start=0&count=${count}`);
    }

    public createCourse(course: Course): Observable<any> {
        return this.http.post(`${URL}`, course);
    }

    public getItemById(id: number): Observable<any> {
        return this.http.get(`${URL}?id=${id}`);
    }

    public updateItem(course: Course): Observable<any> {
        return this.http.patch(`${URL}/${course.id}`, course);
    }

    public removeItem(id: number): Observable<any> {
        return this.http.delete(`${URL}/${id}`);
    }

    public search(text: string): Observable<any> {
        this.loadingService.showLoading();
        return this.http.get(`${URL}?textFragment=${text}`);
    }
}
