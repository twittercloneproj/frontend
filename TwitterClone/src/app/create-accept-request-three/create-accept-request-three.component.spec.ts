import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAcceptRequestThreeComponent } from './create-accept-request-three.component';

describe('CreateAcceptRequestThreeComponent', () => {
  let component: CreateAcceptRequestThreeComponent;
  let fixture: ComponentFixture<CreateAcceptRequestThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAcceptRequestThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAcceptRequestThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
