import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowNewUsersTileComponent } from './follow-new-users-tile.component';

describe('FollowNewUsersTileComponent', () => {
  let component: FollowNewUsersTileComponent;
  let fixture: ComponentFixture<FollowNewUsersTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowNewUsersTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowNewUsersTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
