import {
    Component,
    Input,
    Output,

    ViewEncapsulation,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'app-duration-field',
    templateUrl: './duration-field.component.html',
    styleUrls: ['./duration-field.component.styl'],
    encapsulation: ViewEncapsulation.None,
})
export class DurationFieldComponent {
    @Input() duration: number;
    @Output() durationChange: EventEmitter<number> = new EventEmitter();

    constructor() { }

    public emit(): void {
        this.durationChange.emit(this.duration);
    }
}
