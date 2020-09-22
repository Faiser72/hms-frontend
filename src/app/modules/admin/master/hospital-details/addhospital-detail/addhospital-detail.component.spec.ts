import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhospitalDetailComponent } from './addhospital-detail.component';

describe('AddhospitalDetailComponent', () => {
  let component: AddhospitalDetailComponent;
  let fixture: ComponentFixture<AddhospitalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhospitalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhospitalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
