import { Directive, ElementRef, AfterViewInit, Input, Renderer2 } from '@angular/core';
import { Course } from '../interfaces/course';

const DAY_MILLISECONDS = (24 * 3600) * 1000;

@Directive({
    selector: '[appHighlight]',
})
export class HighlightDirective implements AfterViewInit {
    private fresh: boolean;
    private coming: boolean;

    constructor(
        private element: ElementRef,
        private renderer: Renderer2,
    ) { }

    @Input('appHighlight') course: Course;

    ngAfterViewInit(): void {
        const courseDate = +new Date(this.course.date);
        const currentDate = +new Date();

        this.fresh = courseDate < currentDate && courseDate >= (currentDate - (14 * DAY_MILLISECONDS));
        this.coming = courseDate > currentDate;

        if ( this.fresh) {
            this.highlight('green');
        } else if (this.coming) {
            this.highlight('blue');
        }
    }

    private highlight(color: string): void {
        this.renderer.setStyle(this.element.nativeElement, 'border', `2px solid ${color}`);
    }
}
