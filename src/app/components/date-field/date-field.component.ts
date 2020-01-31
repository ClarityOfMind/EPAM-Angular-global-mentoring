import {Component, ViewEncapsulation} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {FormFieldComponent} from '../form-field/form-field.component';

@Component({
    selector: 'app-date-field',
    templateUrl: './date-field.component.html',
    styleUrls: ['./date-field.component.styl'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: DateFieldComponent,
            multi: true
        }
    ],
    encapsulation: ViewEncapsulation.None,
})
export class DateFieldComponent extends FormFieldComponent<string> {

}
