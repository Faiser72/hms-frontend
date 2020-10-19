import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsurgeryComponent } from './postsurgery.component';

describe('PostsurgeryComponent', () => {
  let component: PostsurgeryComponent;
  let fixture: ComponentFixture<PostsurgeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsurgeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
