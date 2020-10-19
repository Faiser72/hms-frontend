import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalReferenceHomeComponent } from './internal-reference-home.component';

describe('InternalReferenceHomeComponent', () => {
  let component: InternalReferenceHomeComponent;
  let fixture: ComponentFixture<InternalReferenceHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternalReferenceHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternalReferenceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
