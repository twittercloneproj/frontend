import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAcceptRequestComponent } from './create-accept-request.component';

describe('CreateAcceptRequestComponent', () => {
  let component: CreateAcceptRequestComponent;
  let fixture: ComponentFixture<CreateAcceptRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAcceptRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAcceptRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
