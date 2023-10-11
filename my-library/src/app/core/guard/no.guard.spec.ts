import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { noGuard } from './no.guard';

describe('noGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => noGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
