import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotFormAuthComponent } from './forgot-form-auth.component';

describe('ForgotFormAuthComponent', () => {
  let component: ForgotFormAuthComponent;
  let fixture: ComponentFixture<ForgotFormAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotFormAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotFormAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
