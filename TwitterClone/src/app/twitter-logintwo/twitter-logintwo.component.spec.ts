import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterLogintwoComponent } from './twitter-logintwo.component';

describe('TwitterLogintwoComponent', () => {
  let component: TwitterLogintwoComponent;
  let fixture: ComponentFixture<TwitterLogintwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitterLogintwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwitterLogintwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
