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
            name: '',
            date: '',
            length: null,
            description: '',
            authors: [],
            isTopRated: false,
        };
        if (this.id) {
            this.courseService.getItemById(this.id)
                .subscribe(array => {
                    this.course = array[0];
                });
        }
    }

    public save(): void {
        if (!this.id) {
            this.courseService.createCourse(this.course).subscribe(
                () => this.router.navigate(['courses-page'])
            );
        } else {
            this.courseService.updateItem(this.course).subscribe(
                () => this.router.navigate(['courses-page'])
            );
        }


    }

    public cancel(): void {
        this.router.navigate(['courses-page']);
    }

    public onDurationChange(value: number) {
        console.log(value);
        this.course.length = value;
    }
}
