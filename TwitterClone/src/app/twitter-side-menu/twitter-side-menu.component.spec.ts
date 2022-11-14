import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterSideMenuComponent } from './twitter-side-menu.component';

describe('TwitterSideMenuComponent', () => {
  let component: TwitterSideMenuComponent;
  let fixture: ComponentFixture<TwitterSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterSideMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
