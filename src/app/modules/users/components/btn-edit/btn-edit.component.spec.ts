import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnEditComponent } from './btn-edit.component';

describe('BtnEditComponent', () => {
  let component: BtnEditComponent;
  let fixture: ComponentFixture<BtnEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BtnEditComponent]
    });
    fixture = TestBed.createComponent(BtnEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
