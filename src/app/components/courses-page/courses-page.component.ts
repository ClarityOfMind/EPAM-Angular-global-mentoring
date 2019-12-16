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
    public list: Course[] = [];
    public  breadcrumbs = [
        {
            title: 'Courses',
        },
    ];
    private count = 5;

    constructor(
        private courseService: CourseService,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.getList(this.count);
    }

    public load(): void {
        this.count += 5;
        this.getList(this.count);
    }

    private getList(count: number): void {
        this.courseService.getList(count)
            .subscribe(courses => this.list = courses);
    }

    public deleteCourse(id: number): void {
        if (confirm('Do you really want to delete course?')) {
            this.courseService.removeItem(id)
                .subscribe(() => this.getList(this.count));
        }
    }

    public searchCourse(text: string): void {
        this.courseService.search(text)
            .subscribe(
                courses => this.list = courses,
            );
    }

    public addCourse() {
        this.router.navigate(['/courses-page/new']);
    }
}
