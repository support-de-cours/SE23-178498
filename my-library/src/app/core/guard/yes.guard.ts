import { CanActivateFn } from '@angular/router';

export const yesGuard: CanActivateFn = (route, state) => {
  console.log("I SAY YES !!!");
  
  return true;
};
