import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyUserOptionComponent } from './modify-user-option.component';

describe('ModifyUserOptionComponent', () => {
  let component: ModifyUserOptionComponent;
  let fixture: ComponentFixture<ModifyUserOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyUserOptionComponent]
    });
    fixture = TestBed.createComponent(ModifyUserOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
