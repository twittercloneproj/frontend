import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsTileComponent } from './requests-tile.component';

describe('RequestsTileComponent', () => {
  let component: RequestsTileComponent;
  let fixture: ComponentFixture<RequestsTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestsTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestsTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
