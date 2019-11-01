import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { Course } from '../../interfaces/course';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
    selector: 'app-course-item',
    templateUrl: './course-item.component.html',
    styleUrls: ['./course-item.component.styl'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent implements OnInit {
    @Input() course: Course;

    @Output() deleteCourse = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
    }

    public delete(): void {
        this.deleteCourse.emit(this.course.id);
    }
}
