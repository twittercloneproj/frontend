import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePrivacyComponent } from './change-privacy.component';

describe('ChangePrivacyComponent', () => {
  let component: ChangePrivacyComponent;
  let fixture: ComponentFixture<ChangePrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangePrivacyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangePrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
