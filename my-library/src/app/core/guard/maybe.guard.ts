import { CanActivateFn } from '@angular/router';

export const maybeGuard: CanActivateFn = (route, state) => {
  
  const response = (Math.random() * 10) < 2;
  
  if (response) {
    console.log("c'est OUI !");
  }
  else {
    console.log("c'est un NON !!!");
  }

  return response;
};
