import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnfollowNewUsersComponent } from './unfollow-new-users.component';

describe('UnfollowNewUsersComponent', () => {
  let component: UnfollowNewUsersComponent;
  let fixture: ComponentFixture<UnfollowNewUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnfollowNewUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnfollowNewUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
