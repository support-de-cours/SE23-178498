import { CanActivateFn } from '@angular/router';

export const noGuard: CanActivateFn = (route, state) => {
  console.log("I SAY NOP !!!");
  
  return false;
};
