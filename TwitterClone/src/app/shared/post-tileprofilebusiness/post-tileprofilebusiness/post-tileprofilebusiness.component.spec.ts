import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTileprofilebusinessComponent } from './post-tileprofilebusiness.component';

describe('PostTileprofilebusinessComponent', () => {
  let component: PostTileprofilebusinessComponent;
  let fixture: ComponentFixture<PostTileprofilebusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostTileprofilebusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostTileprofilebusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
