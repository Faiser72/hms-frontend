import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalReferenceHomeComponent } from './external-reference-home.component';

describe('ExternalReferenceHomeComponent', () => {
  let component: ExternalReferenceHomeComponent;
  let fixture: ComponentFixture<ExternalReferenceHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalReferenceHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalReferenceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
