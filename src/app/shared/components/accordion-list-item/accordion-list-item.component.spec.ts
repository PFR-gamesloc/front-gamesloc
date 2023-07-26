import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionListItemComponent } from './accordion-list-item.component';

describe('AccordionListItemComponent', () => {
  let component: AccordionListItemComponent;
  let fixture: ComponentFixture<AccordionListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionListItemComponent]
    });
    fixture = TestBed.createComponent(AccordionListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
