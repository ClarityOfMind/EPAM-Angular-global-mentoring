import {
    Component,
    ViewEncapsulation,
    OnInit,
} from '@angular/core';
import { Course } from '../../interfaces/course';
import { CourseService } from 'src/app/services/course-service/course-service.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-courses-page',
    templateUrl: './courses-page.component.html',
    styleUrls: ['./courses-page.component.styl'],
    encapsulation: ViewEncapsulation.None,
})
export class CoursesPageComponent implements OnInit {
    public courses: Course[];
    public id: string;
    public list: Course[];
    private lastSearch: string;
    public  breadcrumbs = [
        {
            title: 'Courses',
        },
    ];

    constructor(
        private courseService: CourseService,
        private router: Router,
    ) {}

    ngOnInit() {
        this.list = this.courseService.getList();
    }

    public load(): void {

    }

    public deleteCourse(id: number): void {
        if (confirm('Do you really want to delete course?')) {
            this.courseService.removeItem(id);
            this.list = this.courseService.getList(this.lastSearch);
        }
    }

    public searchCourse(name: string): void {
        this.lastSearch = name;
        this.list = this.courseService.getList(name);
    }

    public addCourse() {
        this.router.navigate(['/courses-page/new']);
    }
}
