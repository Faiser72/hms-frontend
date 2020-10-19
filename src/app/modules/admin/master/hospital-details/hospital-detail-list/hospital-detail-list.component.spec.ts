import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalDetailListComponent } from './hospital-detail-list.component';

describe('HospitalDetailListComponent', () => {
  let component: HospitalDetailListComponent;
  let fixture: ComponentFixture<HospitalDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HospitalDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
