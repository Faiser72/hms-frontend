import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgeryhomeComponent } from './surgeryhome.component';

describe('SurgeryhomeComponent', () => {
  let component: SurgeryhomeComponent;
  let fixture: ComponentFixture<SurgeryhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurgeryhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurgeryhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
