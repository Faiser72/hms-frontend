import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalDetailHomeComponent } from './hospital-detail-home.component';

describe('HospitalDetailHomeComponent', () => {
  let component: HospitalDetailHomeComponent;
  let fixture: ComponentFixture<HospitalDetailHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalDetailHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalDetailHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
