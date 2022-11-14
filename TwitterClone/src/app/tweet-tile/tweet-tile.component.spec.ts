import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetTileComponent } from './tweet-tile.component';

describe('TweetTileComponent', () => {
  let component: TweetTileComponent;
  let fixture: ComponentFixture<TweetTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TweetTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
