import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHospitalDetailComponent } from './edit-hospital-detail.component';

describe('EditHospitalDetailComponent', () => {
  let component: EditHospitalDetailComponent;
  let fixture: ComponentFixture<EditHospitalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHospitalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHospitalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
