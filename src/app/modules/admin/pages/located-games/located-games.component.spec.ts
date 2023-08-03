import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocatedGamesComponent } from './located-games.component';

describe('LocatedGamesComponent', () => {
  let component: LocatedGamesComponent;
  let fixture: ComponentFixture<LocatedGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocatedGamesComponent]
    });
    fixture = TestBed.createComponent(LocatedGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
