import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTileprofileComponent } from './post-tileprofile.component';

describe('PostTileprofileComponent', () => {
  let component: PostTileprofileComponent;
  let fixture: ComponentFixture<PostTileprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostTileprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostTileprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
