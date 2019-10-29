import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CourseSearchComponent } from './course-search.component';

describe('CourseSearchComponent', () => {
    let component: CourseSearchComponent;
    let fixture: ComponentFixture<CourseSearchComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
        schemas: [NO_ERRORS_SCHEMA],
        declarations: [CourseSearchComponent]
        });
        fixture = TestBed.createComponent(CourseSearchComponent);
        component = fixture.componentInstance;
    });
    it('can load instance', () => {
        expect(component).toBeTruthy();
    });
});
