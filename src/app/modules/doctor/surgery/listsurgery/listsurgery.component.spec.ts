import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsurgeryComponent } from './listsurgery.component';

describe('ListsurgeryComponent', () => {
  let component: ListsurgeryComponent;
  let fixture: ComponentFixture<ListsurgeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsurgeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
