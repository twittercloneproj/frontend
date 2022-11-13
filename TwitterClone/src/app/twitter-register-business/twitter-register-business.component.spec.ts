import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterRegisterBusinessComponent } from './twitter-register-business.component';

describe('TwitterRegisterBusinessComponent', () => {
  let component: TwitterRegisterBusinessComponent;
  let fixture: ComponentFixture<TwitterRegisterBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterRegisterBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterRegisterBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
