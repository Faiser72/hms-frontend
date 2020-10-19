import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListexternalReferenceComponent } from './listexternal-reference.component';

describe('ListexternalReferenceComponent', () => {
  let component: ListexternalReferenceComponent;
  let fixture: ComponentFixture<ListexternalReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListexternalReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListexternalReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
