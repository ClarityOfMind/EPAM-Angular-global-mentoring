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
import { CourseService } from 'src/app/services/course-service/course-service.service';


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

    constructor(
        private filterPipe: FilterPipe,
        private courseService: CourseService,
    ) {}

    ngOnInit() {
        this.list = this.courseService.getList();
    }

    public load(): void {
        console.log('loading...');
    }

    public deleteCourse(id: string): void {
        if (confirm('Do you really want to delete course?')) {
            this.courseService.removeItem(id);
            this.list = this.courseService.getList();
        }
    }

    public searchCourse(name: string): void {
        this.list = this.filterPipe.transform(this.courses, name);
    }
}
