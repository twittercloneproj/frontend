import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFollowersTileComponent } from './my-followers-tile.component';

describe('MyFollowersTileComponent', () => {
  let component: MyFollowersTileComponent;
  let fixture: ComponentFixture<MyFollowersTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFollowersTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFollowersTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
