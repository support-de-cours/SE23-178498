import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { maybeGuard } from './maybe.guard';

describe('maybeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => maybeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
