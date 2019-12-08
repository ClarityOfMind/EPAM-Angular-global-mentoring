import { Injectable } from '@angular/core';
import { Course } from 'src/app/interfaces/course';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    constructor(
        private http: HttpClient,
    ) { }

    public getList(search?: string): Observable<any> {
        return this.http.get('http://localhost:3004/courses')
            .pipe(
                filter( (course: Course) => {
                    if (search) {
                        const regex = new RegExp(search, 'i');
                        return regex.test(course.name);
                    }
                })
            );
    }

    // public createCourse(course: Course): void {
    //     this.courses.push(course);
    // }
    //
    // public getItemById(id: number): Course {
    //     return this.courses
    //         .find(entry => entry.id === id);
    // }
    //
    // public updateItem(course: Course): void {
    //     const index = this.courses.findIndex(entry => entry.id === course.id);
    //     if (index >= 0) {
    //         this.courses[index] = course;
    //     }
    // }
    //
    // public removeItem(id: number): void {
    //     const index = this.courses.findIndex(course => course.id === id);
    //
    //     if (index >= 0) {
    //         this.courses.splice(index, 1);
    //     }
    // }
}
