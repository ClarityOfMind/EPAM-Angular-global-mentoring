import {
    Component,
    ViewEncapsulation,
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,

} from '@angular/core';
import { Course } from '../../interfaces/course';


@Component({
    selector: 'app-courses-page',
    templateUrl: './courses-page.component.html',
    styleUrls: ['./courses-page.component.styl'],
    encapsulation: ViewEncapsulation.None,
})
export class CoursesPageComponent implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
    public courses: Course[];

    constructor() {
        console.log('constructor');
    }

    ngOnInit() {
        this.courses = [
            {
                id: '1',
                title: 'Video Course 1. Name tag',
                creationDate: '9 Nov, 2018 ',
                duration: '1h 28m',
                description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester`,
            },
            {
                id: '2',
                title: 'Video Course 1. Name tag',
                creationDate: '9 Nov, 2018 ',
                duration: '1h 28m',
                description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester`,
            },
            {
                id: '3',
                title: 'Video Course 1. Name tag',
                creationDate: '9 Nov, 2018 ',
                duration: '1h 28m',
                description: `Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester`,
            },
        ];

        console.log('init');
    }

    ngDoCheck(): void {
        console.log('do check');
    }

    ngAfterContentInit(): void {
        console.log('after contet init');
    }

    ngAfterContentChecked(): void {
        console.log('after contet checked');
    }

    ngAfterViewInit(): void {
        console.log('after view init');
    }

    ngAfterViewChecked(): void {
        console.log('after view checked');
    }

    ngOnDestroy(): void {
        console.log('on destroy');
    }
    public load(): void {
        console.log('loading...');
    }

    public deleteCourse(id: string): void {
        console.log(id);
    }

}
