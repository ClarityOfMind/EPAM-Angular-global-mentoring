import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { CourseItemComponent } from './course-item.component';
import { By } from '@angular/platform-browser';

@Component({
    template: `<app-course-item
                    [course]='course'
                    (deleteCourse)="deleteCourse($event)"
                ></app-course-item>`,
})

class TestHostComponent {
    constructor() {}

    public course = {
        id: 'id',
        title: 'title',
        creationDate: 'creationDate',
        duration: 'duration',
        description: 'description',
    };

    public deleteCourse($event) {}
}

describe('CourseItemComponent', () => {
    const expectedCourse = {
        id: 'id',
        title: 'title',
        creationDate: 'creationDate',
        duration: 'duration',
        description: 'description',
    };

    let component: CourseItemComponent;
    let fixture: ComponentFixture<CourseItemComponent>;
    let hostComponent: TestHostComponent;
    let hostFixture: ComponentFixture<TestHostComponent>;
    let deleteItemButton: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [CourseItemComponent, TestHostComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(CourseItemComponent);
        component = fixture.componentInstance;
        hostFixture = TestBed.createComponent(TestHostComponent);
        hostComponent = hostFixture.componentInstance;
        component.course = expectedCourse;
        deleteItemButton = fixture.debugElement.query(By.css('.button__delete')).nativeElement;

        fixture.detectChanges();
        hostFixture.detectChanges();
    });

    it('can load instance', () => {
        expect(component).toBeTruthy();
    });

    // Test as a Class
    it('can delete course item', () => {
        const emitSpy = spyOn(component.deleteCourse, 'emit');
        component.deleteItem();

        expect(emitSpy).toHaveBeenCalled();
    });

    // Standalone testing
    it('should delete item upon button click', () => {
        const deleteSpy = spyOn(component, 'deleteItem');

        deleteItemButton.click();

        expect(deleteSpy).toHaveBeenCalled();
    });

    it('should raise data upcon click', () => {
        const expextedId = expectedCourse.id;
        let emitedId: string;

        component.deleteCourse.subscribe(id => emitedId = id);
        deleteItemButton.click();

        expect(emitedId).toBe(expextedId);
    });

    // Host testing
    it('should emit event', () => {
        const hostCompDeleteSpy = spyOn(hostComponent, 'deleteCourse');
        const button = hostFixture.nativeElement.querySelector('.button__delete');

        button.click();

        expect(hostCompDeleteSpy).toHaveBeenCalled();
    });
});
