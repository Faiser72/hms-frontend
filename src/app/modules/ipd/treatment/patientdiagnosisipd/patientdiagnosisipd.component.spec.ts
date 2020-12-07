import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientdiagnosisipdComponent } from './patientdiagnosisipd.component';

describe('PatientdiagnosisipdComponent', () => {
  let component: PatientdiagnosisipdComponent;
  let fixture: ComponentFixture<PatientdiagnosisipdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientdiagnosisipdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientdiagnosisipdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
