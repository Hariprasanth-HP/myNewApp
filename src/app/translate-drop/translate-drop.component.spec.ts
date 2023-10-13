import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateDropComponent } from './translate-drop.component';

describe('TranslateDropComponent', () => {
  let component: TranslateDropComponent;
  let fixture: ComponentFixture<TranslateDropComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranslateDropComponent]
    });
    fixture = TestBed.createComponent(TranslateDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
