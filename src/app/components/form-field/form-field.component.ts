import {Component, Input} from '@angular/core';
import {ControlValueAccessor, FormControl} from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.styl']
})
export class FormFieldComponent<T = any> implements ControlValueAccessor {
    @Input() control: FormControl;

    public model: T;

    public onFormModelChange: (data: any) => void;
    public onFormControlTouched: () => void;

    public writeValue(value: T): void {
        this.model = value;
        console.log('value: ', value);
        console.log('model: ', this.model);
    }

    public registerOnChange(fn: any): void {
        this.onFormModelChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onFormControlTouched = fn;
    }

    public onInput(value: T): void {
        console.log(this.control);
        this.model = value;
        this.onFormModelChange(value);
    }

}
