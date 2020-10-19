import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtestlistComponent } from './labtestlist.component';

describe('LabtestlistComponent', () => {
  let component: LabtestlistComponent;
  let fixture: ComponentFixture<LabtestlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabtestlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabtestlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
