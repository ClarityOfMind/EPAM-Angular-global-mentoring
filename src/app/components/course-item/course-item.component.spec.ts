import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
    let component: CourseItemComponent;
    let fixture: ComponentFixture<CourseItemComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
        schemas: [NO_ERRORS_SCHEMA],
        declarations: [CourseItemComponent]
        });
        fixture = TestBed.createComponent(CourseItemComponent);
        component = fixture.componentInstance;
    });
    it('can load instance', () => {
        expect(component).toBeTruthy();
    });
});
