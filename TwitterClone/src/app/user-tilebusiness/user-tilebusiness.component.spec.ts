import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTilebusinessComponent } from './user-tilebusiness.component';

describe('UserTilebusinessComponent', () => {
  let component: UserTilebusinessComponent;
  let fixture: ComponentFixture<UserTilebusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTilebusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTilebusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
