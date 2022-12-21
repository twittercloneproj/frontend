import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilenewuserComponent } from './user-profilenewuser.component';

describe('UserProfilenewuserComponent', () => {
  let component: UserProfilenewuserComponent;
  let fixture: ComponentFixture<UserProfilenewuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfilenewuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfilenewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
