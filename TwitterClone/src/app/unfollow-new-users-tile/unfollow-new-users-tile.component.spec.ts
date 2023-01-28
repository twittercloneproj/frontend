import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnfollowNewUsersTileComponent } from './unfollow-new-users-tile.component';

describe('UnfollowNewUsersTileComponent', () => {
  let component: UnfollowNewUsersTileComponent;
  let fixture: ComponentFixture<UnfollowNewUsersTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnfollowNewUsersTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnfollowNewUsersTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
