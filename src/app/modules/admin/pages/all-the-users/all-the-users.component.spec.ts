import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTheUsersComponent } from './all-the-users.component';

describe('AllTheUsersComponent', () => {
  let component: AllTheUsersComponent;
  let fixture: ComponentFixture<AllTheUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTheUsersComponent]
    });
    fixture = TestBed.createComponent(AllTheUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
