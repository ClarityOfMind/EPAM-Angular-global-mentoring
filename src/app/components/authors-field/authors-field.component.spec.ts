import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsFieldComponent } from './authors-field.component';

describe('AuthorsFieldComponent', () => {
  let component: AuthorsFieldComponent;
  let fixture: ComponentFixture<AuthorsFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
