import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthReportHomeComponent } from './birth-report-home.component';

describe('BirthReportHomeComponent', () => {
  let component: BirthReportHomeComponent;
  let fixture: ComponentFixture<BirthReportHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthReportHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthReportHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
