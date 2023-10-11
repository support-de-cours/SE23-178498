import { CanActivateFn } from '@angular/router';

export const confirmGuard: CanActivateFn = (route, state) => {
  return confirm("are you sure to quite ?");
};
