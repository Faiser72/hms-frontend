import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferedToMeComponent } from './refered-to-me.component';

describe('ReferedToMeComponent', () => {
  let component: ReferedToMeComponent;
  let fixture: ComponentFixture<ReferedToMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferedToMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferedToMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
