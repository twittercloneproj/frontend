import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterRegisterComponent } from './twitter-register.component';

describe('TwitterRegisterComponent', () => {
  let component: TwitterRegisterComponent;
  let fixture: ComponentFixture<TwitterRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
