import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CourseSearchComponent } from './course-search.component';
import { By } from '@angular/platform-browser';

describe('CourseSearchComponent', () => {
    let component: CourseSearchComponent;
    let fixture: ComponentFixture<CourseSearchComponent>;
    let searchButton: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [CourseSearchComponent]
        });

        fixture = TestBed.createComponent(CourseSearchComponent);
        component = fixture.componentInstance;
        searchButton = fixture.debugElement.query(By.css('.search__button')).nativeElement;
    });

    it('can load instance', () => {
        expect(component).toBeTruthy();
    });

    it('can serach a course', () => {
        const searchSpy = spyOn(component, 'search');

        searchButton.click();

        expect(searchSpy).toHaveBeenCalled();
    });

    it('can serach a course', () => {
        const consoleSpy = spyOn(console, 'log');

        component.search();

        expect(consoleSpy).toHaveBeenCalled();
    });
});
