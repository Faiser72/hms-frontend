import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptcategoryComponent } from './receiptcategory.component';

describe('ReceiptcategoryComponent', () => {
  let component: ReceiptcategoryComponent;
  let fixture: ComponentFixture<ReceiptcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiptcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiptcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
