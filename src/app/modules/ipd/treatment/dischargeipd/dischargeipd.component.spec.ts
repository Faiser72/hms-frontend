import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DischargeipdComponent } from './dischargeipd.component';

describe('DischargeipdComponent', () => {
  let component: DischargeipdComponent;
  let fixture: ComponentFixture<DischargeipdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DischargeipdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DischargeipdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
