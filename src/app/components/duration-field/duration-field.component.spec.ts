import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DurationFieldComponent } from './duration-field.component';

describe('DurationFieldComponent', () => {
  let component: DurationFieldComponent;
  let fixture: ComponentFixture<DurationFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DurationFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DurationFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
