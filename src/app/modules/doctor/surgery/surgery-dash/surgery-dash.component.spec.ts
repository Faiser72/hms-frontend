import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgeryDashComponent } from './surgery-dash.component';

describe('SurgeryDashComponent', () => {
  let component: SurgeryDashComponent;
  let fixture: ComponentFixture<SurgeryDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurgeryDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurgeryDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
