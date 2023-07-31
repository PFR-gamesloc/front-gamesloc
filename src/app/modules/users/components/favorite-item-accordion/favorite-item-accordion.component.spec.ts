import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteItemAccordionComponent } from './favorite-item-accordion.component';

describe('FavoriteItemAccordionComponent', () => {
  let component: FavoriteItemAccordionComponent;
  let fixture: ComponentFixture<FavoriteItemAccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteItemAccordionComponent]
    });
    fixture = TestBed.createComponent(FavoriteItemAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
