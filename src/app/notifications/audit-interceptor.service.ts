import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { NotificationsStoreService } from './notifications-store.service';

@Injectable()

export class AuditInterceptorService {

  constructor(private notificationsStore: NotificationsStoreService) { }

  public intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    const started = Date.now();
    return next.handle(req).pipe(
      filter((event: HttpEvent<any>) => event instanceof HttpResponse),
      tap((resp: HttpResponse<any>) => this.auditEvent(resp, started))
      );
  }

  private auditEvent(resp: HttpResponse<any>, started: number) {

    const elapsedMs = Date.now() - started;
    const eventMessage = resp.statusText + ' on ' + resp.url;
    const message = eventMessage + ' in ' + elapsedMs + 'ms';
    this.notificationsStore.dispatch(message);
    }
}
