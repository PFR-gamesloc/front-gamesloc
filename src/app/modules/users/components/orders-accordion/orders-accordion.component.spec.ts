import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersAccordionComponent } from './orders-accordion.component';

describe('OrdersAccordionComponent', () => {
  let component: OrdersAccordionComponent;
  let fixture: ComponentFixture<OrdersAccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersAccordionComponent]
    });
    fixture = TestBed.createComponent(OrdersAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
