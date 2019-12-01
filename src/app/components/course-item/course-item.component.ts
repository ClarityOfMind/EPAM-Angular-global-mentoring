import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Course } from '../../interfaces/course';
import { ChangeDetectionStrategy } from '@angular/core';
import { CourseService } from 'src/app/services/course-service/course-service.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-course-item',
    templateUrl: './course-item.component.html',
    styleUrls: ['./course-item.component.styl'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent implements OnInit {
    @Input() course: Course;

    @Output() deleteCourse = new EventEmitter<number>();

    constructor(
        private router: Router,
    ) { }

    ngOnInit() {
    }

    public edit() {
        this.router.navigate([`courses-page/${this.course.id}`], {state: {id: this.course.id}} );
    }

    public deleteItem(): void {
        this.deleteCourse.emit(this.course.id);
    }
}
