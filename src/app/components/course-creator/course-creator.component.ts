import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Course } from 'src/app/interfaces/course';

@Component({
    selector: 'app-course-creator',
    templateUrl: './course-creator.component.html',
    styleUrls: ['./course-creator.component.styl'],
    encapsulation: ViewEncapsulation.None,
})
export class CourseCreatorComponent implements OnInit {
    public title: string;
    public description: string;
    public duration: string;
    public date: string;
    public authors: string[];

    constructor() { }

    ngOnInit() {
    }

}
