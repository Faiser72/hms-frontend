import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbirthReportComponent } from './addbirth-report.component';

describe('AddbirthReportComponent', () => {
  let component: AddbirthReportComponent;
  let fixture: ComponentFixture<AddbirthReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbirthReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbirthReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
