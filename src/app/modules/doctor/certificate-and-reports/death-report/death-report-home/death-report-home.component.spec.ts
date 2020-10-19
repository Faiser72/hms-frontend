import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathReportHomeComponent } from './death-report-home.component';

describe('DeathReportHomeComponent', () => {
  let component: DeathReportHomeComponent;
  let fixture: ComponentFixture<DeathReportHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeathReportHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeathReportHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
