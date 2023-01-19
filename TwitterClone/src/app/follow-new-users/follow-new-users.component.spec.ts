import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowNewUsersComponent } from './follow-new-users.component';

describe('FollowNewUsersComponent', () => {
  let component: FollowNewUsersComponent;
  let fixture: ComponentFixture<FollowNewUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowNewUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowNewUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
