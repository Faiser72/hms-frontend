import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbirthReportComponent } from './listbirth-report.component';

describe('ListbirthReportComponent', () => {
  let component: ListbirthReportComponent;
  let fixture: ComponentFixture<ListbirthReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListbirthReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbirthReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
