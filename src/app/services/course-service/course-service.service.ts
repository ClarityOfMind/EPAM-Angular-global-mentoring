import { Injectable } from '@angular/core';
import { Course } from 'src/app/interfaces/course';

@Injectable({
    providedIn: 'root'
})
export class CourseService {
    private filter: string;
    private courses = [
        {
            id: '1',
            title: 'JavaScript Tutorial',
            creationDate: '12.01.2019',
            duration: '88',
            description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester`,
            topRated: true,
        },
        {
            id: '2',
            title: 'Python Course',
            creationDate: '11.01.2019',
            duration: '50',
            description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester`,
            topRated: false,
        },
        {
            id: '3',
            title: 'PHP Workshop',
            creationDate: '09.11.2018',
            duration: '79',
            description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester`,
            topRated: false,
        },
    ];

    constructor() { }

    public getList(filter?: string): Course[] {
        if (filter) {
            const regex = new RegExp(filter, 'i');
            return this.courses.filter(course => regex.test(course.title));
        }

        return this.courses;
    }

    public createCourse(course: Course): void {
        this.courses.push(course);
    }

    public getItemById(id: string): Course[] {
        return this.courses.filter(course => course.id === id);
    }

    public updateItem(id: string): void {
    }

    public removeItem(id: string): void {
        const index = this.courses.findIndex(course => course.id === id);

        if (index >= 0) {
            this.courses.splice(index, 1);
        }
    }
}
