import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(
    request: HttpRequest<unknown>, 
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> 
  {
    // Clone et modifie la requete avec l'execution de la requete
    const requestClone = request.clone({
      url: `${environment.api_endpoint}${request.url}`
    });

    return next.handle(requestClone);
  }
}
