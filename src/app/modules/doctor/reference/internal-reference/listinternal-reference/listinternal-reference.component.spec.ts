import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListinternalReferenceComponent } from './listinternal-reference.component';

describe('ListinternalReferenceComponent', () => {
  let component: ListinternalReferenceComponent;
  let fixture: ComponentFixture<ListinternalReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListinternalReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListinternalReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
