import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CoursesPageComponent } from './courses-page.component';
import { By } from '@angular/platform-browser';

describe('CoursesPageComponent', () => {
    let component: CoursesPageComponent;
    let fixture: ComponentFixture<CoursesPageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [CoursesPageComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(CoursesPageComponent);
        component = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(component).toBeTruthy();
    });

    // Test as a Class
    it('can load additional course items', () => {
        const consoleSpy = spyOn(console, 'log');
        component.load();

        expect(consoleSpy).toHaveBeenCalled();
    });

    it('can delete course item', () => {
        const consoleSpy = spyOn(console, 'log');
        component.deleteCourse('id');

        expect(consoleSpy).toHaveBeenCalled();
    });

    it ('should invoke load function', () => {
        const loadSpy = spyOn(component, 'load');

        fixture.debugElement.query(By.css('.courses-page__load-button')).triggerEventHandler('click', null);

        expect(loadSpy).toHaveBeenCalled();
    });
});
