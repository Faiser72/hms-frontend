import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexternalReferenceComponent } from './addexternal-reference.component';

describe('AddexternalReferenceComponent', () => {
  let component: AddexternalReferenceComponent;
  let fixture: ComponentFixture<AddexternalReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddexternalReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddexternalReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
