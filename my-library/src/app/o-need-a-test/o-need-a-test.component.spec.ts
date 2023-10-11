import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ONeedATestComponent } from './o-need-a-test.component';

describe('ONeedATestComponent', () => {
  let component: ONeedATestComponent;
  let fixture: ComponentFixture<ONeedATestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ONeedATestComponent]
    });
    fixture = TestBed.createComponent(ONeedATestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
