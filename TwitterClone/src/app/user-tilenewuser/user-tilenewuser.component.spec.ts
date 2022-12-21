import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTilenewuserComponent } from './user-tilenewuser.component';

describe('UserTilenewuserComponent', () => {
  let component: UserTilenewuserComponent;
  let fixture: ComponentFixture<UserTilenewuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTilenewuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTilenewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
