import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLikesComponent } from './dialog-likes.component';

describe('DialogLikesComponent', () => {
  let component: DialogLikesComponent;
  let fixture: ComponentFixture<DialogLikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLikesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
