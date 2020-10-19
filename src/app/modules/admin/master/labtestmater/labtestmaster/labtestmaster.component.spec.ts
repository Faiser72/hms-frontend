import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtestmasterComponent } from './labtestmaster.component';

describe('LabtestmasterComponent', () => {
  let component: LabtestmasterComponent;
  let fixture: ComponentFixture<LabtestmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabtestmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabtestmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
