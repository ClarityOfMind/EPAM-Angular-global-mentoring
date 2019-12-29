import {
    Component,
    ViewEncapsulation,
    OnInit,
} from '@angular/core';
import { Course } from '../../interfaces/course';
import { CourseService } from 'src/app/services/course-service/course-service.service';
import { Router } from '@angular/router';
import {LoadingService} from '../../services/loading.service';
import {Store} from '@ngrx/store';
import {selectCount, selectCourses} from '../../store/course-reducer/course.selectors';
import {AppState} from '../../store/app.reducers';
import {load} from '../../store/course-reducer/course.actions';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-courses-page',
    templateUrl: './courses-page.component.html',
    styleUrls: ['./courses-page.component.styl'],
    encapsulation: ViewEncapsulation.None,
})
export class CoursesPageComponent implements OnInit {
    public courses: Course[];
    public id: string;
    public list$: Observable<Course[]>;
    public  breadcrumbs = [
        {
            title: 'Courses',
        },
    ];
    private count: number;

    constructor(
        private courseService: CourseService,
        private router: Router,
        private loadingService: LoadingService,
        private store: Store<AppState>
    ) {}

    ngOnInit(): void {
        this.store.select(selectCount)
            .subscribe(count => this.count = count);

        this.list$ = this.store.select(selectCourses);
        this.getList(this.count);
    }

    public load(): void {
        this.store.dispatch(load())
        this.getList(this.count);
    }

    private getList(count: number): void {
        this.courseService.getList(count);
    }

    public deleteCourse(id: number): void {
        if (confirm('Do you really want to delete course?')) {
            this.courseService.removeItem(id)
                .subscribe(() => this.getList(this.count));
        }
    }

    public searchCourse(text: string): void {
        this.courseService.search(text);
    }

    public addCourse() {
        this.router.navigate(['/courses-page/new']);
    }
}
