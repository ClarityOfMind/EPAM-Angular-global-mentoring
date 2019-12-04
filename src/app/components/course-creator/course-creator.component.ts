import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Course } from 'src/app/interfaces/course';
import { CourseService } from 'src/app/services/course-service/course-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Breadcrumbs} from '../../interfaces/breadcrumbs';

@Component({
    selector: 'app-course-creator',
    templateUrl: './course-creator.component.html',
    styleUrls: ['./course-creator.component.styl'],
    encapsulation: ViewEncapsulation.None,
})
export class CourseCreatorComponent implements OnInit {
    public course: Course;
    public id: number;
    public breadcrumbs: Breadcrumbs[];

    get title(): string {
        return this.id ? 'Edit' : 'New';
    }

    constructor(
        private courseService: CourseService,
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.id = +this.route.snapshot.paramMap.get('id'); // Вот так берем параметр роутинга. Это статичный вариант
        this.breadcrumbs = [
            {
                title: 'Course',
                route: '/courses-page'
            },
            {
                title: this.title,
            }
        ];

        this.course = {
            id: Math.random() * 10,
            title: '',
            creationDate: '',
            duration: '',
            description: '',
            authors: [],
            topRated: false,
        };
        if (this.id) {
            Object.assign(this.course, this.courseService.getItemById(this.id)); // Это важно. Так ты гарантированно клонируешь объект, а не используешь тот же.
        }
    }

    public save(): void {
        if (!this.id) {
            this.courseService.createCourse(this.course);
        } else {
            this.courseService.updateItem(this.course);
        }

        this.router.navigate(['courses-page']);
    }

    public cancel(): void {
        this.router.navigate(['courses-page']);
    }
}
