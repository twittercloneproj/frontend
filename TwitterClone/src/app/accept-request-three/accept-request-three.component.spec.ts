import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptRequestThreeComponent } from './accept-request-three.component';

describe('AcceptRequestThreeComponent', () => {
  let component: AcceptRequestThreeComponent;
  let fixture: ComponentFixture<AcceptRequestThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptRequestThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptRequestThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
