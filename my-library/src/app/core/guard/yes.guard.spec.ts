import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { yesGuard } from './yes.guard';

describe('yesGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => yesGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
