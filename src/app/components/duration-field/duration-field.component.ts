import {
    Component, Input,
    ViewEncapsulation,
} from '@angular/core';
import {FormControl, NG_VALUE_ACCESSOR} from '@angular/forms';
import {FormFieldComponent} from '../form-field/form-field.component';

@Component({
    selector: 'app-duration-field',
    templateUrl: './duration-field.component.html',
    styleUrls: ['./duration-field.component.styl'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: DurationFieldComponent,
            multi: true
        }
    ],
    encapsulation: ViewEncapsulation.None,
})
export class DurationFieldComponent extends FormFieldComponent<number> {

}
