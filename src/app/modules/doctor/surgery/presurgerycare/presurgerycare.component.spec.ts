import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresurgerycareComponent } from './presurgerycare.component';

describe('PresurgerycareComponent', () => {
  let component: PresurgerycareComponent;
  let fixture: ComponentFixture<PresurgerycareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresurgerycareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresurgerycareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
