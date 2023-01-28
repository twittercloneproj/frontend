import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptRequestsTileComponent } from './accept-requests-tile.component';

describe('AcceptRequestsTileComponent', () => {
  let component: AcceptRequestsTileComponent;
  let fixture: ComponentFixture<AcceptRequestsTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptRequestsTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptRequestsTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
