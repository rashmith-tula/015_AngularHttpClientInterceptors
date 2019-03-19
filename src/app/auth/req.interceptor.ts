import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()

export class reqInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
      console.log("Request Interceptor");
      const clonedReq = req.clone({params: new HttpParams().set("auth", this.auth.getToken()), reportProgress: true})
      return next.handle(clonedReq);
    }
}