import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BComponent } from './b.component';

describe('BComponent', () => {
  let component: BComponent;
  let fixture: ComponentFixture<BComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BComponent]
    });
    fixture = TestBed.createComponent(BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
