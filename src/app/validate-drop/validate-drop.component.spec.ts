import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateDropComponent } from './validate-drop.component';

describe('ValidateDropComponent', () => {
  let component: ValidateDropComponent;
  let fixture: ComponentFixture<ValidateDropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidateDropComponent]
    });
    fixture = TestBed.createComponent(ValidateDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
