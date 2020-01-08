import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Course } from 'src/app/interfaces/course';
import { CourseService } from 'src/app/services/course-service/course-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Breadcrumbs} from '../../interfaces/breadcrumbs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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
    public form: FormGroup;
    public name: FormControl;

    get title(): string {
        return this.id ? 'Edit' : 'New';
    }

    constructor(
        private courseService: CourseService,
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder,
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
                    console.log(array)
                    this.course = array[0];
                });
        }

        this.initForm();

        // this.form = new FormGroup({
        //     title: new FormControl(this.course.name, [Validators.maxLength(50), Validators.required]),
        //     description: new FormControl(this.course.description, [Validators.maxLength(500), Validators.required]),
        //     length: new FormControl(this.course.length, [Validators.required]),
        //     date: new FormControl(this.course.date, [Validators.pattern(/^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/), Validators.required]),
        //     authors: new FormControl(this.course.authors, [Validators.required]),
        // });
    }

    public save(): void {
        console.log(this.form);
        // if (!this.id) {
        //     this.courseService.createCourse(this.course).subscribe(
        //         () => this.router.navigate(['courses-page'])
        //     );
        // } else {
        //     this.courseService.updateItem(this.course).subscribe(
        //         () => this.router.navigate(['courses-page'])
        //     );
        // }
    }

    public cancel(): void {
        this.router.navigate(['courses-page']);
    }

    private initForm(): void {
        this.form = this.fb.group({
            title: [this.course.name, [Validators.maxLength(50), Validators.required]],
            description: [this.course.description, [Validators.maxLength(500), Validators.required]],
            length: [this.course.length, [Validators.required]],
            date: [this.course.date, [Validators.pattern(/^[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/), Validators.required]],
            authors: [this.course.authors, [Validators.required]],
        });
    }
}
