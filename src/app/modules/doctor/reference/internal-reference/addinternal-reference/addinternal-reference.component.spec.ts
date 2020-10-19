import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinternalReferenceComponent } from './addinternal-reference.component';

describe('AddinternalReferenceComponent', () => {
  let component: AddinternalReferenceComponent;
  let fixture: ComponentFixture<AddinternalReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddinternalReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinternalReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
