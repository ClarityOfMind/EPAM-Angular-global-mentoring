import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CoursesPageComponent } from './courses-page.component';

describe('CoursesPageComponent', () => {
    let component: CoursesPageComponent;
    let fixture: ComponentFixture<CoursesPageComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
        schemas: [NO_ERRORS_SCHEMA],
        declarations: [CoursesPageComponent]
        });
        fixture = TestBed.createComponent(CoursesPageComponent);
        component = fixture.componentInstance;
    });
    it('can load instance', () => {
        expect(component).toBeTruthy();
    });
});
