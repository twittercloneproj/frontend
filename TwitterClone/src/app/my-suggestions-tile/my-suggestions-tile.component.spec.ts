import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySuggestionsTileComponent } from './my-suggestions-tile.component';

describe('MySuggestionsTileComponent', () => {
  let component: MySuggestionsTileComponent;
  let fixture: ComponentFixture<MySuggestionsTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySuggestionsTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySuggestionsTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
