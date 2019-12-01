import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Course } from 'src/app/interfaces/course';
import { CourseService } from 'src/app/services/course-service/course-service.service';
import { Router } from '@angular/router';
import { create } from 'domain';

@Component({
    selector: 'app-course-creator',
    templateUrl: './course-creator.component.html',
    styleUrls: ['./course-creator.component.styl'],
    encapsulation: ViewEncapsulation.None,
})
export class CourseCreatorComponent implements OnInit {
    public course: any;
    public mode: 'create' | 'edit';

    constructor(
        private courseService: CourseService,
        private router: Router,
    ) { }

    ngOnInit() {
        const id = history.state.id;
        this.mode = id ? 'edit' : 'create';
        this.course = id ? this.courseService.getItemById(id) : this.setEmptyCourse();
    }

    public save(course) {
        if (this.mode === 'create') {
            this.courseService.createCourse({id: Math.random() * 10, ...course});
        } else {
            this.courseService.updateItem(course);
        }

        this.router.navigate(['courses-page']);
    }

    public cancel() {
        this.router.navigate(['courses-page']);
    }

    public setEmptyCourse() {
        return {
            title: '',
            creationDate: '',
            duration: '',
            description: '',
            authors: [],
        };
    }

}
