import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WardmasterComponent } from './wardmaster.component';

describe('WardmasterComponent', () => {
  let component: WardmasterComponent;
  let fixture: ComponentFixture<WardmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WardmasterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WardmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
