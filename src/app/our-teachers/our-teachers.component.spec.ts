import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTeachersComponent } from './our-teachers.component';

describe('OurTeachersComponent', () => {
  let component: OurTeachersComponent;
  let fixture: ComponentFixture<OurTeachersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurTeachersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
