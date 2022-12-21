import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTileProfilenewuserComponent } from './post-tile-profilenewuser.component';

describe('PostTileProfilenewuserComponent', () => {
  let component: PostTileProfilenewuserComponent;
  let fixture: ComponentFixture<PostTileProfilenewuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostTileProfilenewuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostTileProfilenewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
