import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratelabreportComponent } from './generatelabreport.component';

describe('GeneratelabreportComponent', () => {
  let component: GeneratelabreportComponent;
  let fixture: ComponentFixture<GeneratelabreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratelabreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratelabreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
