import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedallotmentComponent } from './bedallotment.component';

describe('BedallotmentComponent', () => {
  let component: BedallotmentComponent;
  let fixture: ComponentFixture<BedallotmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedallotmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedallotmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
