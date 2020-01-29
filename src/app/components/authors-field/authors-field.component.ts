import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {FormFieldComponent} from '../form-field/form-field.component';
import {Author} from '../../interfaces/Author';
import {CourseService} from '../../services/course-service/course-service.service';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-authors-field',
    templateUrl: './authors-field.component.html',
    styleUrls: ['./authors-field.component.styl'],
    encapsulation: ViewEncapsulation.None,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: AuthorsFieldComponent,
            multi: true
        }
    ],
})
export class AuthorsFieldComponent extends FormFieldComponent<Author[]> implements OnInit {

    public authors$: Observable<Author[]>;

    constructor(
        private courseService: CourseService,
    ) {
        super();
    }


    ngOnInit(): void {
        this.authors$ = this.getAuthors();
    }

    public getAuthors(): Observable<Author[]> {
        return this.courseService.getAuthors();
    }
}
