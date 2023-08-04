import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTheGamesComponent } from './all-the-games.component';

describe('AllTheGamesComponent', () => {
  let component: AllTheGamesComponent;
  let fixture: ComponentFixture<AllTheGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTheGamesComponent]
    });
    fixture = TestBed.createComponent(AllTheGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
