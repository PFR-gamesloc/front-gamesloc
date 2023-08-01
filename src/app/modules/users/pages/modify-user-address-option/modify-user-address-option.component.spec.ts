import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyUserAddressOptionComponent } from './modify-user-address-option.component';

describe('ModifyUserAddressOptionComponent', () => {
  let component: ModifyUserAddressOptionComponent;
  let fixture: ComponentFixture<ModifyUserAddressOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyUserAddressOptionComponent]
    });
    fixture = TestBed.createComponent(ModifyUserAddressOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
