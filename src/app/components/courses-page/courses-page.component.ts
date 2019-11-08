
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
import { FilterPipe } from '../../pipes/filter-pipe/filter.pipe';


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
    public id: string;
    public list: Course[];

    constructor(private filterPipe: FilterPipe) {
        console.log('constructor');
    }

    ngOnInit() {
        this.courses = [
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

        this.list = this.courses;
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

    public searchCourse(name: string): void {
        this.list = this.filterPipe.transform(this.courses, name);
    }
}
