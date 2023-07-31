import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddressAccordionComponent } from './user-address-accordion.component';

describe('UserAddressAccordionComponent', () => {
  let component: UserAddressAccordionComponent;
  let fixture: ComponentFixture<UserAddressAccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAddressAccordionComponent]
    });
    fixture = TestBed.createComponent(UserAddressAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
