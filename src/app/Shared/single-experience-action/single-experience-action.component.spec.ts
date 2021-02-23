import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleExperienceActionComponent } from './single-experience-action.component';

describe('SingleExperienceActionComponent', () => {
  let component: SingleExperienceActionComponent;
  let fixture: ComponentFixture<SingleExperienceActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleExperienceActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleExperienceActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
