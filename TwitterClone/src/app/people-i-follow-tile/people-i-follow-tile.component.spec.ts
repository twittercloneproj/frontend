import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleIFollowTileComponent } from './people-i-follow-tile.component';

describe('PeopleIFollowTileComponent', () => {
  let component: PeopleIFollowTileComponent;
  let fixture: ComponentFixture<PeopleIFollowTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleIFollowTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleIFollowTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
