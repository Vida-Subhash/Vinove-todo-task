import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


export class InterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("inteceptor working...")
     req = req.clone({
       setHeaders: {
         token:"FKJKFJKCNHF54548445DFFSFF"
       }
     });
     return next.handle(req).pipe(
       retry(1),
       catchError(this.errorHandle)
     );
  }
  errorHandle(error:HttpErrorResponse) {
    window.alert(error.message);
    return throwError(error.message || "Server not responding");
  }
}
