import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulehomeComponent } from './schedulehome.component';

describe('SchedulehomeComponent', () => {
  let component: SchedulehomeComponent;
  let fixture: ComponentFixture<SchedulehomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulehomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
