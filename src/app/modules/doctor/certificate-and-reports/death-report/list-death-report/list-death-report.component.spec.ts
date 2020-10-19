import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeathReportComponent } from './list-death-report.component';

describe('ListDeathReportComponent', () => {
  let component: ListDeathReportComponent;
  let fixture: ComponentFixture<ListDeathReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDeathReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDeathReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
