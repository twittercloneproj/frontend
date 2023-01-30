import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAcceptRequestTwoComponent } from './create-accept-request-two.component';

describe('CreateAcceptRequestTwoComponent', () => {
  let component: CreateAcceptRequestTwoComponent;
  let fixture: ComponentFixture<CreateAcceptRequestTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAcceptRequestTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAcceptRequestTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
