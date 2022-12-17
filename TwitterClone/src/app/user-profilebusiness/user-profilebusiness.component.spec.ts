import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilebusinessComponent } from './user-profilebusiness.component';

describe('UserProfilebusinessComponent', () => {
  let component: UserProfilebusinessComponent;
  let fixture: ComponentFixture<UserProfilebusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfilebusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfilebusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
